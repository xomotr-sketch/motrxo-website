#!/usr/bin/env python3
"""Check-only validation for the generated MOTRXO integration draft."""
from __future__ import annotations

import json
import subprocess
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"


def fail(message: str) -> None:
    raise AssertionError(message)


def walk_json(value, parents=()):
    if isinstance(value, dict):
        for key, child in value.items():
            lower = key.lower()
            if "url" in lower:
                permitted_logo = key == "url" and parents and parents[-1] == "logo" and isinstance(child, str) and child.startswith("/assets/car-logos/")
                if not permitted_logo:
                    fail("URL-bearing key in published JSON: " + ".".join(parents + (key,)))
            walk_json(child, parents + (key,))
    elif isinstance(value, list):
        for child in value:
            walk_json(child, parents)


def main() -> None:
    required = [
        "index.html", "dtc/index.html", "app.js", "styles.css", "dtc-dataset.js", "dtc-enhancements.js",
        "product-request.js", "public/data/obdex-index.json", "public/data/service-schedules.json",
        "assets/car-logos/LICENSE.txt", "admin/config.yml", "content/settings.json", "404.html", "robots.txt",
        "sitemap.xml", "manus-routes.json"
    ]
    for relative in required:
        if not (SITE / relative).is_file(): fail("Missing generated asset: " + relative)

    index = (ROOT / "index.html").read_text(encoding="utf-8")
    if 'href="/dtc/"' not in index or 'href="#service-schedule"' not in index or 'id="service-schedule-mount"' not in index:
        fail("Homepage DTC/service navigation or mount is missing")
    if "assets/service-section.js" not in index or "assets/service-schedule.js" not in index:
        fail("Homepage schedule exports are not loaded")
    site_js = (ROOT / "assets/site.js").read_text(encoding="utf-8")
    if "isEditableTarget" not in site_js:
        fail("Global slash shortcut lacks the editable-target guard")
    portal = (SITE / "dtc/index.html").read_text(encoding="utf-8")
    if "<h1" not in portal or "Generic" not in portal and "عام" not in portal:
        fail("Portal initial HTML is not meaningful")
    if '<div id="app" aria-live="polite"></div>' in portal:
        fail("Portal initial body is an empty mount")

    app = (ROOT / "app.js").read_text(encoding="utf-8")
    if "window.location.pathname === \"/dtc/\"" not in app or "`/dtc/?family=${encodeURIComponent(currentFamily)}#codes`" not in app:
        fail("Portal home routing was not exported under /dtc/")
    if "match(/^\\/dtc\\/([^/]+)\\/?$/i)" not in app:
        fail("Portal detail route regex was corrupted")

    for path in (SITE / "public" / "data").rglob("*.json"):
        walk_json(json.loads(path.read_text(encoding="utf-8")))
    if (SITE / "public" / "data" / "obdex-source.json").exists():
        fail("Raw OBDex source manifest was published")
    if (SITE / "assets" / "car-logos" / "manifest.json").exists():
        fail("Logo manifest was published")

    forbidden_names = {".git", "research", "scripts", "netlify", "deployment"}
    for path in SITE.rglob("*"):
        if any(part in forbidden_names or part.startswith(".env") for part in path.relative_to(SITE).parts):
            fail("Private/source tree leaked into site/: " + path.relative_to(SITE).as_posix())

    routes = json.loads((SITE / "manus-routes.json").read_text(encoding="utf-8"))
    route_paths = [item["path"] for item in routes["routes"]]
    if route_paths != ["/", "/dtc/", "/dtc/:code"]:
        fail("Unexpected route manifest: " + repr(route_paths))

    robots = (SITE / "robots.txt").read_text(encoding="utf-8")
    if "Disallow: /admin/" not in robots or "Disallow: /api/" not in robots:
        fail("Robots policy does not exclude admin/API")
    entries = ET.parse(SITE / "sitemap.xml").getroot()
    locations = [node.text for node in entries.findall("{http://www.sitemaps.org/schemas/sitemap/0.9}url/{http://www.sitemaps.org/schemas/sitemap/0.9}loc")]
    records = json.loads((SITE / "public/data/obdex-index.json").read_text(encoding="utf-8"))["records"]
    if len(locations) != len(records) + 1 or locations[0] != "https://www.motrxo.com/":
        fail("Sitemap does not contain exactly main plus generated DTC paths")

    netlify = (ROOT / "netlify.toml").read_text(encoding="utf-8")
    for expected in ('command = "python3 scripts/build_site.py"', 'publish = "site"'):
        if expected not in netlify: fail("Missing Netlify configuration: " + expected)
    if 'from = "/*"' in netlify or 'to = "/index.html"' in netlify:
        fail("A catch-all portal redirect would mask unknown APIs")

    route = (ROOT / "netlify/functions/dtc-page/index.mjs").read_text(encoding="utf-8")
    if 'path: "/dtc/:code"' not in route:
        fail("DTC native route missing")
    function_sources = [
        ROOT / "netlify/functions/vehicle-makes.mjs", ROOT / "netlify/functions/vehicle-models.mjs",
        ROOT / "netlify/functions/dtc-page/renderer.cjs", ROOT / "netlify/functions/dtc-page/index.mjs"
    ]
    for source in function_sources:
        subprocess.run(["node", "--check", str(source)], check=True)
    subprocess.run(["node", str(ROOT / "scripts/test_functions.mjs")], check=True)
    print("Integration checks passed: static allowlist, navigation, routing, privacy, sitemap, and functions.")


if __name__ == "__main__":
    try:
        main()
    except (AssertionError, FileNotFoundError, json.JSONDecodeError, subprocess.CalledProcessError) as error:
        print("Integration check failed:", error, file=sys.stderr)
        raise SystemExit(1)

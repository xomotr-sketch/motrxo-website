#!/usr/bin/env python3
"""Build only MOTRXO's intended static publish tree. No source/research files are copied."""
from __future__ import annotations

import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "site"


def copy_file(relative: str) -> None:
    source = ROOT / relative
    if not source.is_file():
        raise FileNotFoundError("Required publish source is missing: " + relative)
    target = OUT / relative
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(source, target)


def copy_json_directory(relative: str) -> None:
    source = ROOT / relative
    if not source.is_dir():
        raise FileNotFoundError("Required publish directory is missing: " + relative)
    target = OUT / relative
    target.mkdir(parents=True, exist_ok=True)
    for item in sorted(source.rglob("*.json")):
        destination = target / item.relative_to(source)
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(item, destination)


def copy_logo_assets() -> None:
    source = ROOT / "assets" / "car-logos"
    target = OUT / "assets" / "car-logos"
    if not source.is_dir():
        raise FileNotFoundError("Required logo asset directory is missing")
    for item in sorted(source.iterdir()):
        if not item.is_file() or item.name == "manifest.json":
            continue
        if item.suffix.lower() not in {".svg", ".png", ".webp", ".jpg", ".jpeg", ".txt"}:
            continue
        target.mkdir(parents=True, exist_ok=True)
        shutil.copy2(item, target / item.name)


def main() -> None:
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir()

    # Existing MOTRXO homepage, its CMS assets, and its Decap admin application.
    for path in ("index.html", "404.html", "robots.txt", "sitemap.xml", "manus-routes.json"):
        copy_file(path)
    for path in (
        "assets/apple-touch-icon.png", "assets/canbus.js", "assets/cms-content.js",
        "assets/favicon.png", "assets/logo.webp", "assets/news.js", "assets/site.js",
        "assets/styles.css", "assets/service-schedule.css", "assets/service-schedule.js",
        "assets/service-section.js", "assets/dtc-integration.css",
    ):
        copy_file(path)
    for path in ("admin/index.html", "admin/config.yml"):
        copy_file(path)

    # CMS edits are copied fresh every build, rather than being captured in a generated artifact.
    copy_json_directory("content")

    # Standalone DTC portal assets (they deliberately do not use the store stylesheet).
    for path in ("app.js", "styles.css", "dtc-dataset.js", "dtc-enhancements.js", "product-request.js", "service-schedule.js", "service-schedule.css", "dtc/index.html"):
        copy_file(path)

    # Sanitized, licensed public data only. Raw source manifests and research are not publishable.
    for path in ("public/data/obdex-index.json", "public/data/service-schedules.json"):
        copy_file(path)
    for path in ("public/data/MOTRXO-DTC-LICENSE.txt", "public/data/OBDex-LICENSE-DATA.txt"):
        copy_file(path)
    copy_json_directory("public/data/obdex-records")
    copy_logo_assets()

    forbidden = (".git", "research", "scripts", "netlify", ".env", "deployment")
    leaked = [p.relative_to(OUT).as_posix() for p in OUT.rglob("*")
              if any(part in forbidden or part.startswith(".env") for part in p.relative_to(OUT).parts)]
    if leaked:
        raise RuntimeError("Non-publishable paths leaked into site/: " + ", ".join(leaked))


if __name__ == "__main__":
    main()

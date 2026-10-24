import assert from "node:assert/strict";
import { createRequire } from "node:module";
import makes from "../netlify/functions/vehicle-makes.mjs";
import models from "../netlify/functions/vehicle-models.mjs";

const require = createRequire(import.meta.url);
const page = require("../netlify/functions/dtc-page/index.cjs");
const pageData = require("../netlify/functions/dtc-page/data.json");
const code = pageData.records[0].code;

let mode = "ok";
globalThis.fetch = async (url) => {
  if (mode === "bad-content-type") return new Response("not json", { status: 200, headers: { "content-type": "text/plain" } });
  if (mode === "bad-status") return new Response(JSON.stringify({ Results: [] }), { status: 503, headers: { "content-type": "application/json" } });
  const isModels = String(url).includes("GetModelsForMakeId");
  return new Response(JSON.stringify({ Results: isModels ? [{ Model_Name: "Example model" }] : [{ Make_ID: 123, Make_Name: "Example make" }] }), { status: 200, headers: { "content-type": "application/json" } });
};

let response = await makes(new Request("https://example.test/api/vehicle-makes"));
assert.equal(response.status, 200);
assert.equal((await response.json()).Results[0].Make_Name, "Example make");
response = await models(new Request("https://example.test/api/vehicle-models?makeId=123"));
assert.equal(response.status, 200);
assert.equal((await response.json()).Results[0].Model_Name, "Example model");
response = await models(new Request("https://example.test/api/vehicle-models?makeId=0"));
assert.equal(response.status, 400);
assert.match((await response.json()).error, /makeId/);
mode = "bad-content-type";
response = await models(new Request("https://example.test/api/vehicle-models?makeId=987"));
assert.equal(response.status, 502);
assert.equal((await response.json()).error, "Vehicle data is temporarily unavailable.");
response = await makes(new Request("https://example.test/api/vehicle-makes", { method: "POST" }));
assert.equal(response.status, 405);

let rendered = await page.handler({ httpMethod: "GET", queryStringParameters: { code }, headers: { "accept-language": "en-US,en;q=0.9" } });
assert.equal(rendered.statusCode, 200);
assert.match(rendered.body, new RegExp(`<h1>[^<]*`));
assert.match(rendered.body, /id="app"/);
assert.match(rendered.body, /id="site-drawer"/);
assert.match(rendered.body, /data-locale-choice="ar"/);
assert.match(rendered.body, new RegExp(`https://www\\.motrxo\\.com/dtc/${code}`));
assert.match(rendered.body, /property="og:title"/);
rendered = await page.handler({ httpMethod: "GET", queryStringParameters: { code: "P1999" }, headers: {} });
assert.equal(rendered.statusCode, 404);
assert.match(rendered.body, /noindex/);
rendered = await page.handler({ httpMethod: "HEAD", queryStringParameters: { code }, headers: {} });
assert.equal(rendered.statusCode, 200);
assert.equal(rendered.body, "");
console.log("Function checks passed.");

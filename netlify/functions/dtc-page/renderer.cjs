"use strict";

const data = require("./data.json");
const template = require("./template.json");
const records = new Map(data.records.map(record => [record.code, record]));

function escapeHtml(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function language(headers) {
  const value = String(headers?.["accept-language"] || headers?.["Accept-Language"] || "").toLowerCase();
  return value.match(/\b(ar|en|fr|es|it|de)\b/)?.[1] || "ar";
}

function htmlPage(locale, code, record) {
  const copy = template[locale];
  const definition = record ? (record.title?.[locale === "de" ? "de" : "en"] || record.title?.en || code) : "";
  const url = record ? "https://www.motrxo.com/dtc/" + encodeURIComponent(code) : "https://www.motrxo.com/dtc/";
  const title = record ? `${code} — ${definition} | MOTRXO` : `${copy.notFound} | MOTRXO`;
  const description = record ? `${code}: ${definition}. ${copy.description}` : copy.notFoundDescription;
  const article = record
    ? `<article class="container dtc-ssr-detail"><nav aria-label="Breadcrumb"><a href="/dtc/">${escapeHtml(copy.home)}</a></nav><p class="section-kicker">${escapeHtml(copy.generic)}</p><div class="detail-code">${escapeHtml(code)}</div><h1>${escapeHtml(definition)}</h1><p>${escapeHtml(copy.definitionLead)}</p><p>${escapeHtml(copy.notice)}</p><a class="button-primary" href="/dtc/">${escapeHtml(copy.search)}</a></article>`
    : `<section class="container empty-state"><h1>${escapeHtml(copy.notFound)}</h1><p>${escapeHtml(copy.notFoundDescription)}</p><a href="/dtc/">${escapeHtml(copy.search)}</a></section>`;
  const main = `<main id="main"><div id="app" aria-live="polite">${article}</div></main>`;
  const shell = template.bodyShell.replace("__MOTRXO_MAIN__", main);
  const scripts = ["/product-request.js", "/dtc-dataset.js", "/service-schedule.js", "/app.js", "/dtc-enhancements.js"]
    .map(src => `<script defer src="${src}"></script>`).join("");
  return `<!doctype html><html lang="${locale}" dir="${locale === "ar" ? "rtl" : "ltr"}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(title)}</title><meta name="description" content="${escapeHtml(description)}"><meta name="robots" content="${record ? "index,follow" : "noindex,follow"}"><link rel="canonical" href="${escapeHtml(url)}"><meta property="og:type" content="website"><meta property="og:site_name" content="MOTRXO"><meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:url" content="${escapeHtml(url)}"><meta property="og:image" content="https://www.motrxo.com/assets/logo.webp"><meta name="twitter:card" content="summary"><meta name="twitter:title" content="${escapeHtml(title)}"><meta name="twitter:description" content="${escapeHtml(description)}"><meta name="twitter:image" content="https://www.motrxo.com/assets/logo.webp"><link rel="stylesheet" href="/styles.css"><link rel="stylesheet" href="/service-schedule.css"><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet">${scripts}</head><body>${shell}</body></html>`;
}

exports.handler = async event => {
  const method = String(event.httpMethod || "GET").toUpperCase();
  if (!["GET", "HEAD"].includes(method)) {
    return { statusCode: 405, headers: { "Content-Type": "text/plain", "Allow": "GET, HEAD" }, body: "Method not allowed" };
  }
  const raw = String(event.queryStringParameters?.code || "").trim().toUpperCase();
  const code = /^[PBCU][0-3][0-9A-F]{3}$/.test(raw) ? raw : "";
  const record = records.get(code);
  return {
    statusCode: record ? 200 : 404,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": record ? "public, max-age=0, must-revalidate" : "no-store",
      "Vary": "Accept-Language",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    body: method === "HEAD" ? "" : htmlPage(language(event.headers), code || raw, record)
  };
};

(() => {
  const INDEX_URL = "/public/data/obdex-index.json";
  const CHUNK_ROOT = "/public/data/obdex-records/";
  let indexPromise = null;
  let indexRows = [];
  let indexByCode = new Map();
  let metadata = {};
  const chunkPromises = new Map();

  async function loadIndex() {
    if (!indexPromise) {
      indexPromise = fetch(INDEX_URL).then(async response => {
        if (!response.ok) throw new Error(`DTC index request failed (${response.status})`);
        const payload = await response.json();
        if (!payload || !Array.isArray(payload.records) || !payload.metadata) {
          throw new Error("DTC index has an unexpected format");
        }
        indexRows = payload.records.filter(row =>
          row && /^[PBCU][0-3][0-9A-F]{3}$/.test(row.code) &&
          /^[PBCU][0-3][0-9A-F]$/.test(row.group)
        );
        indexByCode = new Map(indexRows.map(row => [row.code, row]));
        metadata = payload.metadata;
        return indexRows;
      }).catch(error => {
        indexPromise = null;
        throw error;
      });
    }
    return indexPromise;
  }

  function getIndex() {
    return indexRows;
  }

  function getSummary(code) {
    return indexByCode.get(String(code || "").trim().toUpperCase()) || null;
  }

  function hasCode(code) {
    return Boolean(getSummary(code));
  }

  function getMetadata() {
    return metadata;
  }

  async function loadRecord(code) {
    const normalized = String(code || "").trim().toUpperCase();
    const summary = getSummary(normalized);
    if (!summary) return null;

    const url = `${CHUNK_ROOT}${summary.group}.json`;
    if (!chunkPromises.has(summary.group)) {
      chunkPromises.set(summary.group, fetch(url).then(async response => {
        if (!response.ok) throw new Error(`DTC detail request failed (${response.status})`);
        return response.json();
      }).catch(error => {
        chunkPromises.delete(summary.group);
        throw error;
      }));
    }
    const chunk = await chunkPromises.get(summary.group);
    const record = chunk && chunk[normalized];
    return record && record.code === normalized ? record : null;
  }

  window.MOTRXO_DTC = { loadIndex, getIndex, getSummary, hasCode, getMetadata, loadRecord };
})();

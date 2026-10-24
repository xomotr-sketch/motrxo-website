import { fetchVPIC, json, methodAllowed } from "./_lib/vpic.mjs";

const BASE = "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/";

export const config = { path: "/api/vehicle-models" };

export default async function handler(request) {
  const head = request.method === "HEAD";
  if (!methodAllowed(request)) return json({ error: "Method not allowed." }, 405, head);
  const makeId = new URL(request.url).searchParams.get("makeId") || "";
  if (!/^[1-9][0-9]{0,8}$/.test(makeId)) {
    return json({ error: "makeId must be a positive numeric NHTSA make id." }, 400, head);
  }
  try {
    const endpoint = BASE + encodeURIComponent(makeId) + "?format=json";
    return json(await fetchVPIC(endpoint, "models:" + makeId), 200, head);
  } catch (_) {
    return json({ error: "Vehicle data is temporarily unavailable." }, 502, head);
  }
}

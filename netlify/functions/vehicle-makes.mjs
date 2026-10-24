import { fetchVPIC, json, methodAllowed } from "./_lib/vpic.mjs";

const ENDPOINT = "https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json";

export const config = { path: "/api/vehicle-makes" };

export default async function handler(request) {
  const head = request.method === "HEAD";
  if (!methodAllowed(request)) return json({ error: "Method not allowed." }, 405, head);
  try {
    return json(await fetchVPIC(ENDPOINT, "makes"), 200, head);
  } catch (_) {
    return json({ error: "Vehicle data is temporarily unavailable." }, 502, head);
  }
}

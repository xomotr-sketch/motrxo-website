import renderer from "./renderer.cjs";

// Native function routing preserves the URL parameter without redirect query rewriting.
export const config = { path: "/dtc/:code" };

export default async function handler(request, context = {}) {
  const pathname = new URL(request.url).pathname;
  const code = context.params?.code || pathname.match(/^\/dtc\/([^/]+)\/?$/)?.[1] || "";
  const rendered = await renderer.handler({
    httpMethod: request.method,
    queryStringParameters: { code },
    headers: { "accept-language": request.headers.get("accept-language") || "" }
  });
  return new Response(request.method === "HEAD" ? null : rendered.body, {
    status: rendered.statusCode,
    headers: rendered.headers
  });
}

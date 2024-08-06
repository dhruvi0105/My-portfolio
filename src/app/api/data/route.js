// src/app/api/data/route.js
export async function GET(request) {
    const data = { message: "Hello, world!" };
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
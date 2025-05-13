export async function GET(request : Request) {
  console.log(request.method , "form backend");
  
  return new Response('Hello, Next.js! 2', {
    status: 200,
    headers: {referer: "referer"},
  })
}

// ruta: http://localhost:3000/api/login
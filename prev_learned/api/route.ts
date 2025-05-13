export async function GET(request : Request) {
  console.log(request.method , "form backend");
  
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: {referer: "referer"},
  })
}
/* export async function GET(request : Request) {
  console.log(request.method , "form backend");
  
  const json = {mensaje: "hola mundo", otraData: 2000}

  return new Response(JSON.stringify(json), {
    status: 200,
    headers: {referer: "referer"},
  })

} */

export async function GET(request: Request) {
/*   const req = await request.json();
  console.log("estamos en el get de la ruta: '/api/json'=", req.name);
 */
  /* const body = await request.json();
  const { name } = body;
  console.log(name, "rebut");
  
   */
  //const a = await request.json()
  
  // si tratamos de convertir el request en json lanza un error
  // por que los metodos GET no tienen cuerpo, los servidores proxy no leeran el cuerpo
  console.log(request);
  
  // For example, fetch data from your DB here
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST(request: Request){
  const body = await request.json();
  const { name } = body;
 
  // e.g. Insert new user into your DB
  const user = { id: 1, name: name }

  return new Response(JSON.stringify(user), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })

  /* return new Response(JSON.stringify(newUser), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  }) */
}

// ruta: http://localhost:3000/api/login
const usuario = {
  nombre: '',
  email: 'andresmarco@gmail.com',
  urlImagen: 'https://avatars.githubusercontent.com/u/97572795?s=400&u=e60d2a95545b1793e7aa58409e14c3753b74e06f&v=4',
  avilitado: true,
  fruta: "🍉"
}

function TestComponent() {
  // primero confirmar alguna logica antes de renderizar algun jsx
  if (!usuario.avilitado) {
    return
  }

  return (
  <div>
    {/* si exciste nombre retornar jsx p si no no renderizamos ningun p */}
    {usuario.nombre ? <p>{usuario.nombre}</p> : null}
    <p>{usuario.email}</p>
    <img 
      src={usuario.urlImagen} 
      alt="imagen de usuario"
      width={100}
      />
  </div>
  )
}
export default TestComponent
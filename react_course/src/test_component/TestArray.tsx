const arrayDePrueba = [
  {nombre: "marco", id : 1},
  {nombre: "eva", id : 2},
  {nombre: "eduardo", id : 3},
]

function TestArray() {

  return (
    <div>
      <h1>lista de invitados</h1>
      <ul>
      {
        arrayDePrueba.map(({nombre, id}) => (
          /* map deve llevar key, 
          para que react pueda referenciar elementos en el dom,
          por ejemplo eliminar un elemento, arrastrar o ordenar */
          <MyComponent nombre={nombre} key={id} />
        ))
      }
    </ul>
    </div>
  )
}

type MyProps = {
  nombre: string
}

function MyComponent({nombre}: MyProps ) {
  return <li>{nombre}</li>
}

export default TestArray  
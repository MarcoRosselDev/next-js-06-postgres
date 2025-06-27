function Test({nombre}: {nombre:string}) {
  return (
    <div>
      <p>{nombre.toUpperCase()}</p>
    </div>
  )
}
export default Test
/* const Test = ({nombre}:{nombre: string}) => {
  return (
    <div>
      <p>{nombre}</p>
    </div>
  )
}

export default Test */
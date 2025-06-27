import { useState } from "react"

function TestState() {
  const miEstado = useState(0)
  const estado = miEstado[0]
  const setEstado = miEstado[1]
  return (
    <button onClick={() => setEstado(estado + 1)} >{estado}</button>
  )
}
export default TestState
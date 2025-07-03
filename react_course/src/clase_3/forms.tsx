import { FormEvent, useRef } from "react";

function Forms() {

  const myInputRef =  useRef<HTMLInputElement>(null)
  
  const handleSubmit = (e : FormEvent) => {
    e.preventDefault()
    console.log(myInputRef.current?.value);
    
  }

  return (
    <form
    onSubmit={handleSubmit}
    >
      <label htmlFor="nombre">Nombre</label>
      <input type="text" id="nombre" placeholder="nombre..." ref={myInputRef} name="nombre"/>
      <button type="submit">send</button>
    </form>
  )
}
export default Forms
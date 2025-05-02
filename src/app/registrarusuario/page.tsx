"use client"
import style from "./registrarusuario.module.css";

export default function RegistrarUsuario () {
  
  function send() {
    return true
  }
  
  return (
    <div className={style.main}>
      <p>registar nuevo usuario form</p>

      <form onSubmit={send} >
        <label htmlFor="nombre">nombre</label>
        <input type="text" name="nombre" id="nombre" placeholder="nombre..." />

        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" placeholder="example@gmail.com" />
      
        <button type="submit">send</button>
      </form>
      
    </div>
  )
}
"use client"
import { ChangeEvent, FormEvent, useState } from "react";
import style from "./login.module.css"

export default function Login() {

  const [loginState, setLoginState] = useState({
    nombre:"",
    password:""
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, "name:",event.target.name);

    setLoginState(previo => {
      return {...previo,
        [event.target.name]: event.target.value
      }
    })
  }

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(loginState);
  }

  return (
    <form onSubmit={handleSubmit} className={style.login_main_div}>
      <p>login form</p>

      <label htmlFor="nombre">nombre</label>
      <input onChange={handleChange}
      type="text" id="nombre" placeholder="nombre..." name="nombre" />
    
      <label htmlFor="password">password</label>
      <input onChange={handleChange}
      type="password" placeholder="*********" name="password" />

      <button type="submit" className={style.button_login}>enviar</button>
    </form>
  )
}
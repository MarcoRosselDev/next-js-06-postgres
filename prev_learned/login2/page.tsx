"use client"
import { FormEvent, ChangeEvent, useState } from "react"
import style from "./login2.module.css"

type Input = {
  name: string
  password: string
}

export default function Login2() {

  const [inputState, handleInputState] = useState<Input>({
    name:"",
    password:""
  })

  function handleInput(event:ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value, event.target.name);

    handleInputState(previo => {
      return {...previo,
        [event.target.name] : event.target.value
      }
    })
  }

  function handleSubmit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(inputState);
  }

  return (
    <form className={style.login2_main} onSubmit={handleSubmit}>
      <label htmlFor="name">name</label>
      <input 
      onChange={handleInput}
      type="text" name="name" id="name" />

      <label htmlFor="password">password</label>
      <input 
      onChange={handleInput}      
      type="password" name="password" id="password" />

      <button type="submit">submit</button>
    </form>
  )
}
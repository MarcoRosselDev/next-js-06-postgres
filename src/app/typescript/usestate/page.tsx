"use client"

import { useState } from "react"

export default function usestatePage() {
  return (
    <div>
      <MyComponent />
    </div>
  )
}

type User = {
  name: string
  age: number
}

function MyComponent() {
  const [text, setText] = useState<string>('click me')
  const [user, setUser] = useState<User|null>(null)

  return (
    <div>
      <p>{user?.age}</p>
      <p>{user?.name}</p>
      <button onClick={() => {
        setUser({name: "marco", age:31})
        setText("check!")
      }}>{text}</button>
    </div>
  )
}

/* "use client"

import sql from "@/db/postgres"
import { useState } from "react"

type Usuarios = {
  nombre: string
  edad: number
}


function MainComponent(props: object[]) {
  const [usuarios, setUsuarios] = useState<null|Usuarios>()
  console.log(props);

  return (
    <div>
      <p>{usuarios}</p>
      <p>Hi use State initial object</p>
      <AnotherComonent setUsuariosFunction={setUsuarios} />
    </div>
  )
}

type setUsuarioFn = () => void

async function AnotherComonent(setUsuariosFunction: setUsuarioFn) {
  async function getDatos() {
    return await sql`select * from usuarios`;
  }
  const data = await getDatos();

  return(
    <p>Hola</p>
  )
}

export default function UseStatePage() {


  return (
    <>
      <p>Hola</p>
      <MainComponent />
    </>
  )
} */
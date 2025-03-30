"use client"

import Link from "next/link";
import styles from "./nuevousuario.module.css"
import { FormEvent } from 'react'

export default function CrearUsuario() {

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/nuevousuario', {
      method: 'POST',
      body: formData,
    })
 
    console.log(response, "log desde page.nuevo usuario tsx");
    // Handle response if necessary
    //const data = await response.json()
    // ...
  }

  return (
    <main className={styles.main}>
      <Link href="/">ir a inicio</Link>
      <form onSubmit={onSubmit}>
        <label htmlFor="nombre">nombre</label>
        <input type="text" id="nombre" />
        <label htmlFor="password">password</label>
        <input type="password" id="pasword" />

        <button type="submit">crear</button>
      </form>
    </main>
  );
}

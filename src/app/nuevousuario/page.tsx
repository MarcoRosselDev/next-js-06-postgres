
import Link from "next/link";
import styles from "./nuevousuario.module.css"
import sql from "@/db/postgres";

export default function CrearUsuario() {

  async function create(formData:FormData) {
    "use server"
    // get nombre come from input--> name="nombre"
    const nombre = formData.get("nombre")
    const pass = formData.get("password")
    console.log(nombre, pass, formData);
    const id_usuario =  Math.round((Math.random() * 23) + (Math.random() * 1000));
    const crearUsuario = await sql`
    INSERT INTO usuarios (nombre, id_usuario, password)
    values (${nombre}, ${id_usuario}, ${pass})
    `
    Promise.all([crearUsuario])
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }

/*   async function onSubmit(event: FormEvent<HTMLFormElement>) {
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
  */ 

  return (
    <main className={styles.main}>
      <Link href="/">ir a inicio</Link>
      <form action={create}>
        <label htmlFor="nombre">nombre</label>
        <input type="text" id="nombre" name="nombre" />
        <label htmlFor="password">password</label>
        <input type="password" id="pasword" name="password" />

        <button type="submit">crear</button>
      </form>
    </main>
  );
}

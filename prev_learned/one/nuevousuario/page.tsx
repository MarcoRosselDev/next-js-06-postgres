import Link from "next/link";
import styles from "./nuevousuario.module.css"
import bcrypt from "bcrypt";
import {QueryInputType , queryNuevoUsuario} from "./queryNuevoUsuario";
import { v4 as uuidv4 } from 'uuid';
import {validador, ObjetoUsuario} from "./ej_validacion";
//import { redirect } from 'next/navigation';
//import { revalidatePath } from 'next/cache'

export default function CrearUsuario() {

  async function create(formData:FormData) {
    "use server"
    // get nombre come from input--> name="nombre"
    const nombre = formData.get("nombre")?.toString()
    const pass = formData.get("password")?.toString()

    if (nombre != undefined && pass != undefined) {
      bcrypt.hash(pass, 10, async function(err, hash) {
        // Store hash in your password DB.
        try {
          // validacion con zod
          const id_publica = uuidv4();
          const nuevousuario = await validador({nombre, pass: hash})
          queryNuevoUsuario({hash: nuevousuario.pass, id_publica, nombre: nuevousuario.nombre});
        } catch (error) {
          console.log("error en el try catch en page.nuevousuario", error);
        }
  
        //revalidatePath('/')
        //redirect("/")
      });   
  
    }
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

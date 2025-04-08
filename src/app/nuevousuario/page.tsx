import Link from "next/link";
import styles from "./nuevousuario.module.css"
import bcrypt from "bcrypt";
import queryNuevoUsuario from "./queryNuevoUsuario";
import { v4 as uuidv4 } from 'uuid';
//import { redirect } from 'next/navigation';

export default function CrearUsuario() {

  async function create(formData:FormData) {
    "use server"
    // get nombre come from input--> name="nombre"
    const nombre = formData.get("nombre")
    const pass = formData.get("password")
    const id_publica = uuidv4();
    console.log("1", formData, pass);
    console.log("2", typeof nombre, typeof pass, typeof formData);    

    bcrypt.hash(pass, 10, function(err, hash) {
      // Store hash in your password DB.
      if (err) {
        console.log(err);
      }
      try { 
        /* (nombre, password, id_publica) */
        queryNuevoUsuario(nombre, hash, id_publica);
      } catch (error) {
        console.log(error);
      }
    });   
    
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

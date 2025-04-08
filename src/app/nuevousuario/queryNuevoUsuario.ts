import sql from "@/db/postgres";
import { redirect } from 'next/navigation';

export default async function queryNuevoUsuario (nombre: string, hash: string , id_publica: string) {

  const query = await sql`INSERT INTO usuarios (nombre, password, id_publica)
        values (${nombre}, ${hash}, ${id_publica}) ;`
  if (query) {
    console.log(query);
    
    redirect('/login');
  }
}
/* 
nombre character varying(50) NOT NULL
    password character varying(250) NOT NULL,
    id_publica character varying(250) NOT NULL,
    PRIMARY KEY (id_usuario)
*/
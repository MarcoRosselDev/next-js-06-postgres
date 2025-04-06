import sql from "@/db/postgres";

export default async function queryNuevoUsuario (nombre: string, hash: string , id_publica: string) {
  console.log("from query nuevo usuario" , nombre, hash, id_publica);
  
  return sql`INSERT INTO usuarios (nombre, password, id_publica)
        values (${nombre}, ${hash}, ${id_publica}) ;`
}
/* 
nombre character varying(50) NOT NULL
    password character varying(250) NOT NULL,
    id_publica character varying(250) NOT NULL,
    PRIMARY KEY (id_usuario)
*/
import sql from "@/db/postgres";

export type QueryInputType = {
  nombre: string
  hash: string
  id_publica: string
}

export async function queryNuevoUsuario ({hash, id_publica, nombre}: QueryInputType) {
  return await sql`INSERT INTO usuarios (nombre, password, id_publica)
  values (${nombre}, ${hash}, ${id_publica}) ;`
    .then(data => {
      console.log("fn query nuevo usuario", data, typeof data);
    })
    .catch(error => console.log("error fn query nuevo usuario", error))
}
/* 
nombre character varying(50) NOT NULL
    password character varying(250) NOT NULL,
    id_publica character varying(250) NOT NULL,
    PRIMARY KEY (id_usuario)
*/
import sql from "@/db/postgres";

export default async function queryNuevoUsuario (nombre: string, id_usuario: string | number, hash: string) {
  console.log("from query nuevo usuario" , nombre, id_usuario, hash);
  
  return sql`INSERT INTO usuarios (nombre, id_usuario, password)
        values (${nombre}, ${id_usuario}, ${hash}) ;`
}
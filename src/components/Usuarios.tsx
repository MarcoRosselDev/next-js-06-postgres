import sql from "../db/postgres";
import BtnEliminarUsuario from "./BtnEliminarUsuario";

/* async function getUsersOver(age:number) {
  const users = await sql`select name, age from users where age > ${ age }`
  // users = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
  return users
}
 */
async function getQuery() {
  return await sql`select * from usuarios;`
  //return await sql`select ROW_TO_JSON(select * from usuarios);`
}

/* async function deleteUser(id:number) {
  return await sql`delelte from usuarios where id_usuario=${id}`
}
 */


async function Usuarios() {
  const data = await getQuery()

  return(
    <>
    {
    data.map((value,index) => {

      const values = {
        id_publica: value.id_publica,
        password: value.password,
        id_usuario: value.id_usuario,
        nombre: value.nombre,
      }

      return (
      <div key={index}>
        <p >nombre : {value.nombre} </p>
        <p> password : {value.password}</p>
        <p>id_privada : {value.id_usuario}</p>
        <p>id_publica : {value.id_publica}</p>

        <BtnEliminarUsuario  targetValue={values} />
      </div>
      )
    })
    }
  </>
  )
}

export { getQuery, Usuarios};
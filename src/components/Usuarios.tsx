import sql from "../db/postgres";
import BtnEliminarUsuario from "./BtnEliminarUsuario";

/* async function getUsersOver(age:number) {
  const users = await sql`select name, age from users where age > ${ age }`
  // users = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
  return users
}
 */
async function getQuery() {
  return await sql`select * from verbs_table;`
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
    data.map(({infinitivo, presentcontinuous, presentperfect,regularverb, simplepast, id_public},index) => {

      const values = {
        id_publica: id_public,
        infinitivo,
        presentcontinuous,
        presentperfect,
        regularverb,
        simplepast
      }

      return (
      <div key={index}>
        <p >id_public : {id_public} </p>
        <p> infinitivo: {infinitivo}</p>
        <p>presentcontinuous : {presentcontinuous}</p>
        <p>presentperfect : {presentperfect}</p>
        <p>regularverb : {regularverb}</p>
        <p>simplepast : {simplepast}</p>

        <BtnEliminarUsuario  targetValue={values} />
      </div>
      )
    })
    }
  </>
  )
}

export { getQuery, Usuarios};
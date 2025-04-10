import sql from "../db/postgres";

/* async function getUsersOver(age:number) {
  const users = await sql`select name, age from users where age > ${ age }`
  // users = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
  return users
}
 */
async function getQuery() {
  return await sql`select * from usuarios; `
}

async function Usuarios() {
  const data = await getQuery()
  return(
    <>
      {
      data.map((value,index) => {
        return (
        <div key={index}>
          <p >nombre : {value.nombre} </p>
          <p> password : {value.password}</p>
          <p>id_privada : {value.id_usuario}</p>
          <p>id_publica : {value.id_publica}</p>
        </div>
        )
      })
      }
    </>
  )
}

export { getQuery, Usuarios};
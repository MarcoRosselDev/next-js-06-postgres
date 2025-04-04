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
          return <p key={index}>{value.nombre} < br/> 
          password = {value.password} </p>
        })
      }
    </>
  )
}

export { getQuery, Usuarios};
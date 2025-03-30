import sql from "../db/postgres";

/* async function getUsersOver(age:number) {
  const users = await sql`select name, age from users where age > ${ age }`
  // users = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
  return users
}
 */
async function getQuery() {
  return await sql`select * from categories; `
}

async function Query() {
  const data = await getQuery()
  return(
    <>
      {
        data.map((value,index) => {
          return <p key={index}>{value.category_name}</p>
        })
      }
    </>
  )
}

export { getQuery, Query};
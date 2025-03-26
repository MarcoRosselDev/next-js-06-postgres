import sql from "../db/postgres";

async function getUsersOver(age:number) {
  const users = await sql`
    select
      name,
      age
    from users
    where age > ${ age }
  `
  // users = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
  return users
}

async function getQuery() {
  const query = await sql`
  select * from categories;
  `
  return query
}

async function Query() {
  const data = await getQuery()
  console.log(data);
  return(
    <>
      <p>query component</p>
      {
        data.map((value,index) => {
          return <p key={index}>{value.category_name}</p>
        })
      }
    </>
  )
}

export {getUsersOver, getQuery, Query};
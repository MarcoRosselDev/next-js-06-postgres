import postgres from "postgres";
console.log(process.env.URL);


const sql = postgres(`${process.env.URL}`)

export default sql;
import postgres from "postgres";

const sql = postgres(`${process.env.URL}`)

export default sql;
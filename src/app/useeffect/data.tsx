"use server"
import sql from "@/db/postgres";

export default async function queryTest() {
  return await sql`SELECT * FROM verbs_table;`
}
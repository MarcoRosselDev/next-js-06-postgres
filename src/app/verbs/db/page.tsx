import { createTabla } from "@/db/db_verbs/db_verbs"

export default async function page() {

  const a = await createTabla();
  console.log(a, "from create table");

  return(
    <div>
      <p>crear db_verbs</p>
    </div>
  )
}
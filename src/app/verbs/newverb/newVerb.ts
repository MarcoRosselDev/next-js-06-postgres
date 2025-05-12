"use server"
import { Input } from "./verb_type";
import sql from "@/db/postgres";
import { v4 as uuidv4 } from 'uuid';
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function createVerb({infinitivo, presentcontinuous,presentperfect, regularverb, simplepast}:Input) {
  try {
    const id_public = uuidv4();
    const w = await sql`INSERT INTO
    verbs_table(regularverb, simplepast, presentperfect, presentcontinuous, infinitivo, id_public) 
    VALUES (${regularverb}, ${simplepast}, ${presentperfect}, ${presentcontinuous}, ${infinitivo}, ${id_public});`

    console.log("w info:", w);
  } catch (error) {
    console.log("from serv...:", error);
  }
  revalidatePath('/') // Update cached posts
  redirect(`/`) // Navigate to the new post page
}

    
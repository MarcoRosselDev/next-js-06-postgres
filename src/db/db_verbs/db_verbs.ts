import sql from '../postgres';
/* export async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;
} */

export async function createTabla() {
  return await sql`CREATE TABLE verbs_table
(
    regularverb character varying(20) NOT NULL,
    simplepast character varying(20) NOT NULL,
    presentperfect character varying(20) NOT NULL,
    presentcontinuous character varying(20) NOT NULL,
    infinitivo character varying(20) NOT NULL,
    id_public character varying(200) NOT NULL,
    id serial NOT NULL,
    PRIMARY KEY (id)
);
`

}

/* export async function createDbVerbs() {
  await sql`CREATE DATABASE verbs;`
} */
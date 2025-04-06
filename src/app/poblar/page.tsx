import sql from "@/db/postgres";

export default async function Poblar() {

  const deleteTable = sql`DROP TABLE usuarios;`

  Promise.all([deleteTable]).then(data => console.log(data))

  return (
    <div>
      <p>hola mundo</p>
    </div>
  );
}

/*  crear database
CODIGO PARA CRAR UNA NUEVA DB DESDE POSTGRES DB DEFAULT SERVER
SOLO SIRVE SI LO LLAMAMOS LA PRIMERA VEZ, LUEGO ELIMINAR O COMENTAR
POR QUE LANZARA ERROR,

  const crearDB = sql`CREATE DATABASE nextjs_07
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LOCALE_PROVIDER = 'libc'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;`;

  Promise.all([creartabla]).then(data => console.log(data))

CREAR TABLA:


  const creartabla = sql`CREATE TABLE public.usuarios
  (
      nombre character varying(100) NOT NULL,
      id_usuario character varying(100) NOT NULL,
      password character varying(100) NOT NULL,
      PRIMARY KEY (id_usuario)
  );
`
*/

/* crear tabla modo prueba
const creartabla = sql`CREATE TABLE usuarios
  (
      nombre character varying(100) NOT NULL,
      id_usuario character varying(100) NOT NULL,
      password character varying(100) NOT NULL,
      PRIMARY KEY (id_usuario)
  );
`; */

/* eliminar usuarios
const deleteTable = sql`DROP TABLE usuarios;`
*/
import styles from "./typescript.module.css";

function MyComponente(params:{nombre: string, edad: number}) {
  "use client"
  return (
    <>
      <p>{params.nombre}, tengo {params.edad} años de edad</p>
      <button onClick={() => console.log("j")}>click me !</button>
    </>
  )
}

export default async function Typescript() {
  "use client"
  return (
    <div className={styles.ejemplo}>
      <p>Hola typescript</p>
      <MyComponente nombre="Marco" edad={31} />
    </div>
  );
}
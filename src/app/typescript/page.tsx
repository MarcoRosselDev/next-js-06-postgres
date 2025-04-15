"use client"
import styles from "./typescript.module.css";

type ButtonProps = {
  nombre: string
  edad: number
}

//function MyComponente(params:{nombre: string, edad: number}) {
function MyComponente(props:ButtonProps) {
  const {edad, nombre} = props;
  return (
    <>
      <p>{nombre}, tengo {edad} años de edad</p>
      <button onClick={(event) => {
        console.log("hi", event);
      }}>click me !</button>
    </>
  )
}

export default function Typescript() {
  return (
    <div className={styles.ejemplo}>
      <p>Hola typescript</p>
      <MyComponente nombre="Marco" edad={31} />
    </div>
  );
}
"use client"
import { MouseEvent } from "react";

function MyComponent() {

  // como esto es dificil de memorizar lo copiamos de las sugerencias de vscode
  function handleClick(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    console.log(event.target);
  }

  return <button onClick={handleClick}>click me</button>
}

export default function Event(){
  return (
    <>
      <MyComponent />
    </>
  )
}
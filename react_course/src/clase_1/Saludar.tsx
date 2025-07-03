import { useState } from "react";
import Test from "./Test";

function Saludar() {
  const [message, setMessage] = useState("");
  function handleSubmit(nombre:string) {
    //setMessage(Test({nombre}))
  }
  function handleChange() {
    console.log();
  }
  return (
    <div>
      <p>cual es tu nombre?</p>
      <input type="text" placeholder="nombre..." onChange={handleChange}/>
      <button onSubmit={() => handleSubmit("marco")}>enter</button>
    </div>
  )
}
export default Saludar
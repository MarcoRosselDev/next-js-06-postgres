//import { useState } from "react";

export default function Square({value, setValue}) {
  //const [square, setSquare] = useState(value);
  
  return <button 
    className="square"
    onClick={setValue}
    >{value}</button>;
}
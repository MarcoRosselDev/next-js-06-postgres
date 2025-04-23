"use client"

import { useState , Dispatch, SetStateAction} from "react";
// this componente come from another file

/* type MyPropHook = {
  setValue: () => void // this is an error
  // we shud to use a espesific type component on this setValue property function
  value: number
} */
  type MyPropHook = {
    setValue: Dispatch<SetStateAction<number>>
    value: number
  }
  

function MyHook({setValue, value}: MyPropHook) {

  return (
  <>
    <p>{value}</p>
    <button onClick={() => setValue(value + 1)} >up</button>
  </>
  )
}

// and then we use it into our main page file.
export default function Hook() {
  const [value, setValue] = useState(0)
  console.log(value);
  
  return (
    <>
      <MyHook setValue={setValue} value={value}/>
    </>
  );
}
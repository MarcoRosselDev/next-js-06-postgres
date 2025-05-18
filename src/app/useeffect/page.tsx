"use client";
import { useEffect, useState } from "react";
import queryTest from "./data";

export default function Page() {
  
  const [test, setTest] = useState(0)
  const verbsObject = await queryTest()

  

  useEffect(()=>{
    console.log("hollo world useEffect");
    console.log(verbsObject);
  },[test])

  return (
    <div>
      <p>Hola use effect</p>
      <p>{test}</p>
      <button onClick={() => setTest(prev => prev + 1)}>count</button>
    </div>
  )
}
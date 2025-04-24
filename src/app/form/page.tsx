"use client"
//import { useForm, SubmitHandler } from "react-hook-form"
import {SubmitHandler, useForm} from 'react-hook-form'


type Inputs = {
  name: string
  lastName: string
}

export default function FormComponent() {
  
  const{register, handleSubmit} = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">name</label>
        <input type="text" placeholder='nomber...' {...register("name")}/>
        <label htmlFor="">last name</label>
        <input type="text" placeholder='nomber...' {...register("lastName")}/>

        <button type="submit">send</button>
      </form>
      <p>Hi</p>
    </div>
  )
}
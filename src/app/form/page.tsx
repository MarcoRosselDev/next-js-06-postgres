"use client"
//import { useForm, SubmitHandler } from "react-hook-form"
import { useForm } from "react-hook-form"
import style from "./formstyle.module.css"

type Inputs = {
  example: string
  exampleRequired: string
}

export default function Form() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
  //const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  
  console.log(watch("example"))

  return (
    <div className={style.something}>
      <p>Hola mundo</p>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input defaultValue="test" {...register("example")} />
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
      </form>
    </div>
  )
}
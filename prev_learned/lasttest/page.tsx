"use client"
import style from './style.module.css'
import {useForm, SubmitHandler} from 'react-hook-form'

type Input = {
  nombre: string
}

export default function Page() {

  const {register, handleSubmit, formState:{errors}} = useForm<Input>()

  const f : SubmitHandler<Input> = data => console.log(data);
  

  return (
    <form className={style.main} onSubmit={handleSubmit(f)}>
      <label htmlFor="nombre">nombre</label>
      <input {...register("nombre", {required: true})} 
      aria-invalid={errors.nombre? "true": "false"}
      type="text" name="nombre" id="nombre" placeholder="nombre..." />

      {errors.nombre?.type === "required" && (<p>te falto el nombre aweonao</p>)}

      <button type="submit">enviar</button>
    </form>
  )
}
"use client"
import {SubmitHandler, useForm} from 'react-hook-form'
import style from './minform.module.css'

type MyType = {
  nombre: string
  email: string
  mensaje: string
}
export default function Page(){

  const {register, handleSubmit} = useForm<MyType>()

  const onSubmit: SubmitHandler<MyType> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.main}>
      <label htmlFor="nombre">Nombre</label>
      <input type="text" id='nombre' placeholder='nombre' {...register("nombre")} />
      
      <label htmlFor="email">email</label>
      <input type="email" id='email' placeholder='example@gmail.com' {...register("email")} />
      
      <label htmlFor="textarea">Mensaje</label>
      <textarea  {...register("mensaje")} id="textarea" placeholder='mensaje...'></textarea>

      <button type="submit">enviar</button>
    </form>
  )
}
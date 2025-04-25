"use client";
import style from './form2.module.css'
import {SubmitHandler, useForm} from 'react-hook-form'

type Color = ["red", "blue", "green"]

type Input = {
  nombre: string
  edad: number
  color: Color
}

export default function Page() {

  const {register, handleSubmit, formState:{errors}} = useForm<Input>()

  const onsubmit:SubmitHandler<Input> = data => console.log(data)
   

  return (
    <form className={style.main} onSubmit={handleSubmit(onsubmit)}>
      <label htmlFor="nombre">nombre</label>
      <input type="text" id="nombre" placeholder='nombre...' 
      {...register("nombre", {required: true})} 
      aria-invalid={errors.nombre?"true":"false"}
      />
      {errors.nombre?.type === "required" && (<p>te falta el nombre, pajaron</p>)}

      <label htmlFor="edad">edad</label>
      <input type="number" id="edad" placeholder='00...'
      {...register("edad", {required: true})} />

      <label htmlFor="color">seleccion de color</label>
      <select id='color'
      {...register("color")}>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
      </select>

      <button type="submit">enviar</button>

    </form>
  )
}
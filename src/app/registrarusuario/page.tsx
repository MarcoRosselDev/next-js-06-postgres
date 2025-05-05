"use client"
import style from "./registrarusuario.module.css";
import { SubmitHandler, useForm } from "react-hook-form"
import { registerSchema as schema, plans } from "@/validations/registrarUsuario";
import { zodResolver } from '@hookform/resolvers/zod';
//import { zodResolver } from '@hookform/resolvers/zod';

type Input = {
  nombre: string
  password: string
  confirmPassword: string
  email: string
  peso: string
  plan: string
}

export default function RegistrarUsuario () {

  const {register, handleSubmit, formState:{errors}} = useForm({resolver: zodResolver(schema)})

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
    console.log(errors);
    /* en esta parte va la logistica de postgresql
    luego de registrar redirigir al inicio
    
    .futuros pasos revisar el error en resolver
    .y crear el login y manejo de cookies para mantener seciones abiertas
    */
  }

  const opcionesPlan = plans.map(val => {
    return (<option key={val} value={val}>{val}</option>)
  })
  
  return (
    <div className={style.main}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form} >
        
        {/* name */}
        <label htmlFor="nombre">nombre</label>
        <input
        {...register("nombre", { required: true })}
        type="text" name="nombre" id="nombre" placeholder="nombre..." />
        {errors.nombre && <span>{errors.nombre.message}</span>}

        {/* email */}
        <label htmlFor="email">email</label>
        <input 
        {...register("email", {required: true})}
        type="email" name="email" id="email" placeholder="example@gmail.com" />
        {errors.email && <span>{errors.email.message}</span>}

        {/* password */}
        <label htmlFor="password">password</label>
        <input 
        {...register("password", {required: true})}
        type="password" name="password" id="password" placeholder="*********" />
        {errors.password && <span>{errors.password.message}</span>}

        {/* password */}
        <label htmlFor="confirmPassword">confirm password</label>
        <input 
        {...register("confirmPassword", {required: true})}
        type="password" name="confirmPassword" id="confirmPassword" placeholder="*********" />
        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}


        <label htmlFor="peso">peso</label>
        <input
        {...register("peso")}
         type="number" name="peso" id="peso" placeholder="0" />
        {errors.peso && <span>{errors.peso.message}</span>}

        {/* plan */}
        <label htmlFor="plan">Plan</label>
        <select id="plan" {...register("plan")}>
          {opcionesPlan}
        </select>
        {errors.plan?.message && <p>{errors.plan?.message}</p>}

        {/* por ahora resivimos todo bien pero nesecitamos una comparacion de password
        si escribimos password diferentes lo acepta sin problemas.
        devemos hacer una balidacion de coinsidencias y si falla enviar un mensaje */}

        <button type="submit">send</button>
      </form>
      
    </div>
  )
}
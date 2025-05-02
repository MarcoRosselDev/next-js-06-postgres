"use client"
import style from "./registrarusuario.module.css";
import { SubmitHandler, useForm } from "react-hook-form"

type Input = {
  nombre: string,
  password: string,
  passwordReview: string,
  email: string,
}

export default function RegistrarUsuario () {

  const {register, handleSubmit, formState:{errors}} = useForm<Input>()

  const onSubmit: SubmitHandler<Input> = (data) => console.log(data)

  
  return (
    <div className={style.main}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form} >
        
        {/* name */}
        <label htmlFor="nombre">nombre</label>
        <input
        {...register("nombre", { required: true })}
        type="text" name="nombre" id="nombre" placeholder="nombre..." />
        {errors.nombre && <span>Please include a name please</span>}

        {/* email */}
        <label htmlFor="email">email</label>
        <input 
        {...register("email", {required: true})}
        type="email" name="email" id="email" placeholder="example@gmail.com" />
        {errors.email && <span>Please include an email please</span>}

        {/* password */}
        <label htmlFor="password">password</label>
        <input 
        {...register("password", {required: true})}
        type="password" name="password" id="password" placeholder="*********" />
        {errors.password && <span>Please include a password please</span>}

        {/* password */}
        <label htmlFor="password">password</label>
        <input 
        {...register("passwordReview", {required: true})}
        type="password" name="passwordReview" id="passwordReview" placeholder="*********" />
        {errors.passwordReview && <span>Please repeat the same password please</span>}


        {/* por ahora resivimos todo bien pero nesecitamos una comparacion de password
        si escribimos password diferentes lo acepta sin problemas.
        devemos hacer una balidacion de coinsidencias y si falla enviar un mensaje */}

        <button type="submit">send</button>
      </form>
      
    </div>
  )
}
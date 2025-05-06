"use client"
import Link from "next/link";
import {useForm, SubmitHandler} from "react-hook-form"
import { Input } from "./verb_type"
import { zodResolver } from '@hookform/resolvers/zod';
import {newVerbSchema as schema} from "./handleErros"

export default function NewVerb(){
  
  const {register, handleSubmit, formState:{errors}} = useForm({resolver: zodResolver(schema)})

  const handleForm: SubmitHandler<Input> = (data) => console.log(data);
  
  return (
    <main>
      <form onSubmit={handleSubmit(handleForm)}>
        <h3>New verb</h3>

        <label htmlFor="regularverb">regular verb</label>
        <input
        {...register("regularverb", {required: true, maxLength: 20})}
        type="text" name="regularverb" id="regularverb" placeholder="...go" />
        <span>{errors.regularverb && errors.regularverb.message}</span>

        <label htmlFor="simplepast">simple past</label>
        <input
        {...register("simplepast", {required: true, maxLength: 20})}
        type="text" name="simplepast" id="simplepast" placeholder="...went" />
        <span>{errors.simplepast && errors.simplepast.message}</span>

        <label htmlFor="presentperfect">present perfect</label>
        <input
        {...register("presentperfect", {required: true, maxLength: 20})}
        type="text" name="presentperfect" id="presentperfect" placeholder="...have gone/has gone" />
        <span>{errors.presentperfect && errors.presentperfect.message}</span>

        <label htmlFor="presentcontinuous">present continuous</label>
        <input
        {...register("presentcontinuous", {required: true, maxLength: 20})}
        type="text" name="presentcontinuous" id="presentcontinuous" placeholder="...I'm going" />
        <span>{errors.presentcontinuous && errors.presentcontinuous.message}</span>

        <label htmlFor="infinitivo">infinitivo</label>
        <input
        {...register("infinitivo", {required: true, maxLength: 20})}
        type="text" name="infinitivo" id="infinitivo" placeholder="...to go" />
        <span>{errors.infinitivo && errors.infinitivo.message}</span>
      
        <button type="submit">send</button>

      </form>
      <Link href="/verbs" >go back</Link>
    </main>
  )
}
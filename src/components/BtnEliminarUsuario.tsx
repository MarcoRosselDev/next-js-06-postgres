"use client"
import { Input } from "@/app/verbs/newverb/verb_type";

export default function BtnEliminarUsuario(targetValue: { targetValue: Input}){
  return (
    <button onClick={() => console.log(targetValue.targetValue.id_public, targetValue)}>
      eliminar usuario
    </button>
  )
}
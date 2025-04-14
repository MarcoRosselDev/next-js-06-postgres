"use client"

type DeleteType = {
  id_publica : string;
  id_usuario : number;
  nombre: string;
  password: string;
}

export default function BtnEliminarUsuario(targetValue: { targetValue: DeleteType}){
  return (
    <button onClick={() => console.log(targetValue.targetValue.id_usuario, targetValue)}>
      eliminar usuario
    </button>
  )
}
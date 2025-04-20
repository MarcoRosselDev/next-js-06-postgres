import {z} from "zod"

const objetoUsuario = z.object({
  nombre: z.string(),
  edad: z.number()
})

type ObjetoUsuario = z.infer<typeof objetoUsuario>

export default function validador(obj: ObjetoUsuario) {
  try {
    const resultado = objetoUsuario.parse(obj)
    return resultado
  } catch (error) {
    return error
  }
}
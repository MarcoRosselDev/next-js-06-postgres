import {z} from "zod"

const objetoUsuario = z.object({
  nombre: z.string(),
  pass: z.string()
})

export type ObjetoUsuario = z.infer<typeof objetoUsuario>

/* type ObjetoUsuario = {
  nombre?: string | null
  edad?: number
}
 */
export function validador(obj: ObjetoUsuario) {
  try {
    const resultado = objetoUsuario.parse(obj)
    return resultado
  } catch (error) {
    return error
  }
}
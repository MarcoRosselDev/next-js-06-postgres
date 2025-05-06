import {z} from "zod"
// as const por que z.enum resive valores de solo lectura, si nos marca error.
export const plans = ["free", "basic", "medium", "pro"] as const

export type Plan = (typeof plans)[number] // para iterar en el componente front y solo editar un array en futuros cambios

export const newVerbSchema = z.object({
    regularverb: z.string().max(20, {message: "max length verb = 20"}),
    simplepast: z.string().max(20, {message: "max length verb = 20"}),
    presentperfect: z.string().max(20, {message: "max length verb = 20"}),
    presentcontinuous: z.string().max(20, {message: "max length verb = 20"}),
    infinitivo: z.string().max(20, {message: "max length verb = 20"})
})

export const registerSchema = z.object({


  nombre: z.string()
  .min(4, {message: "Name must be at least 4 characters long"})
  .max(50, {message: "Name must be less than 50 characters long"}),
  

  password: z.string().min(6, {message: "Password must be at least 6 characters long"}),


  confirmPassword: z.string(),


  email: z.string().email({message: "invalid email"}),
  // codifo de ejemplo si un input type number es resivido:
  // peso: z.string() <=== es string por que al momento de resivir es si o si string
  
  // luego .refine(prev => mutarValorPrevio(prev)) lo mutamos a nuestra conveniencia.
  //peso: z.string().refine(peso => parseFloat(peso))

  // ejemplo si el imput no es un numero y lo queremos transformar a number con parseFoat:
  // con el envio de un mensaje de error
  peso: z.string().refine(previo => !isNaN(parseFloat(previo)), {message:"send a number please"}),


  plan: z.enum(plans, {errorMap: ()=> ({message: "Please select a plan"})})

  
})
.refine(data => data.password === data.confirmPassword, {
  message: "passwords must match", 
  path: ["confirmPassword"] // path es la ruta donde se mostrara el mensaje de error
})
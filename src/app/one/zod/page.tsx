"use client";
import {z} from 'zod';

const UserSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  phone: z.number()
})

type UserType = z.infer<typeof UserSchema>

const UserInput:UserType = {
  email: "marco@gmail.com",
  name: "marco",
  phone: 1203943423
}

export default function Zod() {

  // comprobar el input de ej. si pasa la comprobacion de esquema
  const check = UserSchema.parse(UserInput);

  // si todo esta bien devuelve el objeto UserInput
  console.log(check);
  
  // si algun parametro esta mal lanza el siguiente error
  /* stitched-error.ts:23 Uncaught ZodError: [
  {
    "validation": "email",
    "code": "invalid_string",
    "message": "Invalid email",
    "path": [
      "email"
    ]
  }
] */

  return (
    <div>
      <p>biblioteca zod</p>
    </div>
  )
}
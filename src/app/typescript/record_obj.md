## record type

```tsx
// para trabajar con objetos en props lo solucionamos con recors
// por ejemplo para aplicar el siguiente objeto en el componente Comp:

<Comp params={{
  marco:31,
  eva:63,
  eduardo: 59
  }} />
// devemos declarar los typos del objeto de la siguiente forma

type ButtonProps = {
  usuarios: Record<string, number>
}
// o lo mismo pero con opciones espesificas
type ButtonProps = {
  usuarios: Record<"marco" | "eva" | "eduardo" , number>
}
// luego esto aplicarlo a el componente

function Comp({usuarios}: ButtonProps){
}
```
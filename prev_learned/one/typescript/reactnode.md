## React.Node 

cuando en el componente utilizaremos algun elemento o texto nesecitamos espesificar el type de este
```tsx
// por ejemplo:
<Mycomponente>
  Hola mundo
<Mycomponente />
// o un jsx elemento
<Mycomponente>
  <button>click me!</button>
</ Mycomponente>
// o barios elementos
<Mycomponente>
  <p>texto</p>
  <p>de</p>
  <p>ejemplo</p>
  <button>click me!</button>
</ Mycomponente>
```

las soluciones son las siguientes

```tsx
type TypeProps = {
  children: string
}

function MyComponente({children}: TypeProps){
  console.log(children);
  return (
    <div>
    </div>
  )
}

export default function Node() {
  return (
    <>
      <MyComponente>
        hola
      </MyComponente>
    </>
  );
}
```

la mejor opcion es utilizar react.node que engloba todos los elementos de react
```tsx
type Props = {
  children: React.ReactNode
}
```
si buscamos expesifisidad llamamos al elemento JSX espesifico,
pero para eso requerimos la importacion de JSX
```tsx
import {JSX} from "react"

type Props = {
  children: JSX.Element 
}
// o puede ser un arreglo de esots elementos si son mas de uno
type Props = {
  children: JSX.Element[]
}
```
codigo base de explicacion de typos
```tsx
function ComponenteReact(props: {text: string}){
  return <button>{props.text}<button/>
}
// lugeo al utilizar el componente en React:
<ComponenteReact text="Click me!" />
```
##

```tsx
// sin type
function ComponenteReact(
  props: 
    nombre: string, 
    edad?: number
  ){
  const {nombre, edad} = props
  return <p>Hola mi nombre es {nombre} y tengo {edad}<p/>
}
// lugeo al utilizar el componente en React:
<ComponenteReact nombre="marco" edad={31} />
```
##

```tsx
type MyProps = {
  nombre: string
  edad?: number // el ? significa que es opcional
}
function ComponenteReact(props: MyProps){
  const {nombre, edad} = props
  return <p>Hola mi nombre es {nombre} y tengo {edad}<p/>
}
// lugeo al utilizar el componente en React:
<ComponenteReact nombre="marco" edad={31} />
// no marca error por que la edad es opcioal
<ComponenteReact nombre="lushito" />
```

## Union type

```ts
// opcion 1
type MyProps = {
  nombre: string
  color: "red" | "blue" | "pink" | "black"
  size: 30 | 40 | 50
}
// opcion 2
type Colors =  "red" | "blue" | "pink" | "black"
type Sizes = 30 | 40 | 50

type MyProps = {
  nombre: string
  color: Colors
  size: Sizes
}

function ComponenteReact(props: MyProps){
  const {nombre, color, size} = props
  return <p>Hola mi nombre es {nombre} my color favorito es  {color}<p/>
}
// lugeo al utilizar el componente en React:
<ComponenteReact nombre="lushito" color="red" size={30} />
```

## Arrays
```tsx
type MyProps = {
  input: string[] // objeto de string
  input2: [string, string, string] // espesificar el largo
  input3?: [number, number, number?] // 3er opcional
  input4: ["red" | "blue" | "pink" | "black"] // opciones
}
<ReactComp input={["Hi"]}  input4={["black"]} />

```
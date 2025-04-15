## style Type

```tsx
type StypesType = {
 backgroundColor?: string
 color?: string
}

function Comp(params: StylesType) {

  const {backgroundColor, color} = params;

  return (
    <button style={{
      backgroundColor: backgroundColor,
      color: color
      }}>click me !</button>
  )
}

<Comp backgroundColor="red" color="blue" />

// poco practico para aplicar estilos, puede tener muchas variaciones
// otra manoera de hacer lo mismo
```
## style Type alternativo

```tsx
// disponible en react para acceder a todas las propiedades css
// de esta manera evitamos declarar cada typo de propiedad css
type ButtonStyle = {
  style: React.CSSProperties
}

function Comp({style}: ButtonStyle) {

  return (
    <button style={style} >click me !</button>
  )
}

<Comp style={{
  backgroundColor:"red" 
  color:"blue"
}} />

```
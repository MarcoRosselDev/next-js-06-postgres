## type function

```tsx
type PropF = {
  click: () => void
}

function FnExample({click}:PropF) {
  return (
    <button onClick={click}></button>
  )
}

<FnExample click={() => {
  console.log("Hola mundo!")
}} />
```
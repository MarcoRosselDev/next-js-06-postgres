
//children: string
type TypeProps = {
  // reactnode nos dice que puede ser cualquire tipo de elemento hijo
  children: React.ReactNode
}

function MyComponente({children}: TypeProps){
  return (
    <div>
      {children}
    </div>
  )
}

export default function Node() {
  return (
    <>
      <MyComponente>
        hola
        <p>hola</p>
      </MyComponente>
    </>
  );
}
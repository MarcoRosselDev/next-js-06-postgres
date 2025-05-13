type PropF = {
  click: (text:string) => void;
  texto: string;
}

function FnExample({click, texto}:PropF) {
  return (
    <button onClick={() => click(texto)}>fn btn</button>
  )
}

export {FnExample}
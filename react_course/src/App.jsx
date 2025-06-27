import { useState } from 'react'
import './App.css'
import Square from './components/Square'
import calcular_ganador from './components/calcular_ganador.js'
//import Button from './components/button'

function App() {
  const [square, setSquares] = useState([
    null,null,null,
    null,null,null,
    null,null,null
  ])
  const [xIsNext, setXIsNext] = useState(true);
  /* Para que los jugadores sepan cuándo termina el juego, puedes mostrar 
  un texto como “Ganador: X” o “Ganador: O”. Para hacerlo, agrega una 
  sección status al componente Board. El estado mostrará el ganador si el 
  juego termina y si el juego está en curso, se mostrará el turno del 
  siguiente jugador: */

  const winner = calcular_ganador(square);
  let status;
  if (winner) {
    status = "Ganador: " + winner;
  } else {
    status = "Siguiente jugador: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    // primero comprobamos que no tiene un valor no nullo para no sobreescribir
    if (square[i] || calcular_ganador(square)) {
      return;
    }
    const nextSquares = square.slice();
    nextSquares[i] = xIsNext? "X" : "O";
    
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div>{status}</div>
      <div className="board-row">
        <Square value={square[0]} setValue={() => handleClick(0)} />    
        <Square value={square[1]} setValue={() => handleClick(1)} />    
        <Square value={square[2]} setValue={() => handleClick(2)} />    
      </div>
      <div className="board-row">
        <Square value={square[3]} setValue={() => handleClick(3)} />    
        <Square value={square[4]} setValue={() => handleClick(4)} />    
        <Square value={square[5]} setValue={() => handleClick(5)} />    
      </div>
      <div className="board-row">
        <Square value={square[6]} setValue={() => handleClick(6)} />    
        <Square value={square[7]} setValue={() => handleClick(7)} />    
        <Square value={square[8]} setValue={() => handleClick(8)} />    
      </div>
    </>
  )
}

export default App

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/*
class Square extends React.Component {

    render() {
        return (
        <button 
            className="square" 
            onClick = {() => this.props.onClick()}
            >
            {this.props.value}
        </button>
        );
    }
}
//aplicamos los mismo que esta clase Square pero en función.
*/

function Cuadrado(props) {
    return (
        <button className="cuadrado" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Borde extends React.Component {

    renderSquare(i) {
        return (
        <Cuadrado 
        value={this.props.cuadrados[i]}
        onClick={() => this.props.onClick(i)} //---
        />
        );
    }

    /*
    constructor(props) {
        super(props);
        this.state = {
            cuadrados: Array(9).fill(null),
            xIsNext: true,
        };
    }
*/

    render() {
        // const status = "Next player: " + (this.state.xIsNext ? 'X' : 'O');
/*      const winner = calcularGanador(this.state.cuadrados);
        let status;
        if (winner) {
            status = 'Winer: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }*/

        return (
        <div>
            {/* <div className="status">{status}</div> */}
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        </div>
        );
    }
}

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            history: [{
                cuadrados: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const cuadrados = current.cuadrados.slice();

        if(calcularGanador(cuadrados) || cuadrados[i]) {
            return;
        }
        cuadrados[i] = this.state.xIsNext ? 'X': 'O';
        this.setState({
            history: history.concat([{
                cuadrados: cuadrados,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {

    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calcularGanador(current.cuadrados);

    const moves = history.map((step, move) => {
        const desc = move ?
        'Go to move #' + move:
        'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => this.jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    let status;
    if(winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
        <div className="game">
            <div className="game-board">
                <Borde 
                    cuadrados={current.cuadrados}
                    onClick={(i) => this.handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
  }
}

function calcularGanador(cuadrados) {
    const linea = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for(let i = 0; i < linea.length; i++) {
        const [a, b, c] = linea[i];
        if (cuadrados[a] && cuadrados[a] === cuadrados[b] && cuadrados[a] === cuadrados[c]) {
            return cuadrados[a];
        }
    }
    return null;
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

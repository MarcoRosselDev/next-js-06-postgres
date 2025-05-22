class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {/* Cambia el código debajo de esta línea */}
    return this.props.fiftyFifty ? <h1>You Win!</h1>: <h1>You Lose!</h1>;
    {/* Cambia el código encima de esta línea */}
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      // Completa la sentencia return:
      return {
        counter: prevState.counter + 1
      }
    });
  }
  render() {
    const expression = Math.random() >= .5; // Cambia esta línea
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Cambia el código debajo de esta línea */}
        <Results fiftyFifty={expression} />
        {/* Cambia el código encima de esta línea */}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
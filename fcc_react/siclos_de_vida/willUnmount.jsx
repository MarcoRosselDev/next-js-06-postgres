/* Agrega un detector de eventos en el método componentDidMount() 
para los eventos keydown y haz que estos eventos ejecuten la función callback handleKeyPress().
Puedes usar document.addEventListener() el cual toma el evento (en comillas) 
como primer argumento y la función callback como segundo argumento.

Posteriormente, en componentWillUnmount(), remueve este mismo detector de eventos. 
Puedes pasar los mismos argumentos al document.removeEventListener(). 
Es buena práctica usar este método del ciclo de vida para hacer cualquier limpieza 
en un componente de React antes de que estos sean desmontados y destruidos. 
Removiendo los detectores de eventos es un ejemplo de una limpieza de este tipo. */
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Cambia el código debajo de esta línea
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }
  // Cambia el código encima de esta línea
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
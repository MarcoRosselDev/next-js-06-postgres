/* El método shouldComponentUpdate() se añade en un componente llamado OnlyEvens. 
Actualmente, este método devuelve true, así que OnlyEvens re-renderiza cada vez que recibe nuevos props. 
Modifica el método para que OnlyEvens se actualice sólo si el value de sus nuevos "props" es par.
Haz clic en el botón Add y observa el orden de los eventos en la consola de tu navegador mientras
se activan los "hooks" del ciclo de vida. */
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?', nextProps, nextState);
    // Cambia el código debajo de esta línea
    if (nextProps.value%2 == 0){
      return true;
    } else {
      return false
    }
    // Cambia el código encima de esta línea
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
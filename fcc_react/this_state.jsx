class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Cambia el código debajo de esta línea */ }
        <h1>{this.state.name}</h1>
        { /* Cambia el código encima de esta línea */ }
      </div>
    );
  }
};
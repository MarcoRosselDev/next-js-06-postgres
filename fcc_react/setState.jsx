class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // Cambia el código debajo de esta línea

    // Cambia el código encima de esta línea
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Cambia el código debajo de esta línea */ }
        <button onClick={() => this.handleClick()}>Click Me</button>
        { /* Cambia el código encima de esta línea */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};
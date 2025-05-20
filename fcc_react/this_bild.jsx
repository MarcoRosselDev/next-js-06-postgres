class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Cambia el código debajo de esta línea
    //this.setState = this.setState.bind(this)
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // Cambia el código encima de esta línea
  }
  // Cambia el código debajo de esta línea
  toggleVisibility(){
    this.setState(state => ({
      visibility: !state.visibility
    }))
  }
  // Cambia el código encima de esta línea
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
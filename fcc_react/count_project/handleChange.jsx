class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Cambia el código debajo de esta línea
    this.handleChange = this.handleChange.bind(this)
    // Cambia el código encima de esta línea
  }
  // Cambia el código debajo de esta línea
  handleChange(event){
    this.setState({input: event.target.value})
  }
  // Cambia el código encima de esta línea
  render() {
    return (
      <div>
        { /* Cambia el código debajo de esta línea */}
        <input onChange={this.handleChange} value={this.state.input} />
        { /* Cambia el código encima de esta línea */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
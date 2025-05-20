class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // Cambia el código debajo de esta línea
    event.preventDefault();
    this.setState({submit:this.state.input})
    // Cambia el código encima de esta línea
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Cambia el código debajo de esta línea */}
          <input onChange={this.handleChange} value={this.state.input} />
          {/* Cambia el código encima de esta línea */}
          <button type='submit'>Submit!</button>
        </form>
        {/* Cambia el código debajo de esta línea */}
        <h1>{this.state.submit}</h1>
        {/* Cambia el código encima de esta línea */}
      </div>
    );
  }
}
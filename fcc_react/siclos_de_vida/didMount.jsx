class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Cambia el código debajo de esta línea */}
        <h1>Active Users: {this.state.activeUsers}</h1>
        {/* Cambia el código encima de esta línea */}
      </div>
    );
  }
}
const reducer = (state = 5) => {
  return state;
}

// Los métodos Redux están disponibles desde un objeto Redux
// Por ejemplo: Redux.createStore()
// Define el store aquí:
const store = Redux.createStore(reducer)
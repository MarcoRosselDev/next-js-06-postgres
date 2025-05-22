/* El editor de código tiene el ejemplo anterior, así como el inicio de una función reducer para ti. 
Rellena el cuerpo de la función reducer para que si recibe una acción de tipo 'LOGIN' 
devuelva un objeto de estado con login establecido a true. De lo contrario, devuelve el state actual. 
Ten en cuenta que el state actual y la action enviada se pasan al reductor, 
por lo que puedes acceder al tipo de la acción directamente con action.type. */

const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Cambia el código debajo de esta línea
  return action.type === "LOGIN"? {login:true}: state;
  // Cambia el código encima de esta línea
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
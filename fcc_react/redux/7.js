/* El editor de código tiene un almacén, acciones y creadores de acción configurados para ti.
 Rellena la función reducer para manejar múltiples acciones de autenticación. 
 Usa una sentencia switch de JavaScript en el reducer para responder a diferentes eventos de acción. 
Este es un patrón estándar en la escritura de reductores Redux. 
 La sentencia switch debe cambiar sobre action.type y devolver el estado de autenticación apropiado.

Nota: En este punto, no te preocupes por la inmutabilidad del estado, 
ya que es pequeña y simple en este ejemplo. Para cada acción, puedes devolver un nuevo objeto,
 por ejemplo, {authenticated: true}. Además, 
 no olvides escribir un caso default en tu sentencia switch que devuelva el state actual.
  Esto es importante porque una vez que tu aplicación tiene múltiples reductores, 
  todos ellos se ejecutan cada vez que se realiza un envío de acción, 
  incluso cuando la acción no está relacionada con ese reductor. En tal caso, 
  querrás asegurarte de que devuelves el state actual. */

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Cambia el código debajo de esta línea
  switch (action.type) {
    case 'LOGOUT':
      return {authenticated: false}
    case 'LOGIN':
      return {authenticated: true}
    default:
      return state
  }
  
  // Cambia el código encima de esta línea
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
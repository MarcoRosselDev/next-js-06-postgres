/* Después de crear una acción, el siguiente paso es enviar la acción al almacén Redux 
para que pueda actualizar su estado. En Redux, se definen creadores de acción para lograr esto. 
Un creador de acción es simplemente una función de JavaScript que devuelve una acción. 
En otras palabras, los creadores de acción crean objetos que representan eventos de acción.

Define una función llamada actionCreator() que devuelve el objeto action cuando es llamado. */

const action = {
  type: 'LOGIN'
}
// Define un creador de acción aquí:

function actionCreator() {
  return action;
}
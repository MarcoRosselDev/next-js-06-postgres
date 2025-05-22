/* Dado que Redux es un framework de gestión de estado, 
la actualización del estado es una de sus tareas principales. 
En Redux, todas las actualizaciones de estado se activan mediante acciones de envío. 
Una acción es simplemente un objeto de JavaScript que contiene información 
sobre un evento de acción que ha ocurrido. El almacén Redux recibe estos objetos de acción, 
y luego actualiza su estado de acuerdo a ello. 
A veces una acción Redux también lleva algunos datos. 
Por ejemplo, la acción lleva un nombre de usuario después de que un usuario inicia sesión. 
Aunque los datos son opcionales, las acciones deben llevar una propiedad type 
que especifica el "tipo" de acción que se ha producido.

Piensa en las acciones Redux como mensajeros que entregan información 
sobre los eventos que ocurren en tu aplicación al almacén Redux. 
A continuación, el almacén se encarga de actualizar el estado en función 
de la acción realizada. */

// Define una acción aquí:
const action = {type: 'LOGIN'}
fetch('/json/cats.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').innerHTML = JSON.stringify(data);
  });
/* Note: The fetch() method uses GET as the default HTTP method. This means you don’t need to specify it explicitly for basic data retrieval.

Echa un vistazo a cada parte de este código.

En la primera línea es la que realiza la petición. Entonces, fetch(URL) realiza una petición GET a la URL especificada. Este método devuelve una Promesa.

Después de la devolución de la promesa, si la petición fue satisfactoria, se ejecuta el método then, el cual toma la respuesta y la convierte a formato JSON.

El método then también devuelve una promesa, la cual es manejada por el siguiente método then. ¡El argumento en el segundo then es el objeto JSON que estás buscando!

Ahora, selecciona el elemento que recibirá los datos usando document.getElementById(). Luego modifica el código HTML del elemento insertando una cadena creada a partir del objeto JSON devuelto de la solicitud. */
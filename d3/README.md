# NOTAS freecodecamp libreria d3

```javascript
// el metodo selectAll selecciona todas las etiquetas html
// el metodo text reemplasa el texto de la etiqueta por el argumento
// el metodo select solo selecciona la primera etiq html encontrada
const anchors = d3.selectAll('a').text('cambio de texto')
```

### ingresar datos y tipos de datos
```javascript
// ejemplo de freecodecamp
const dataset = ['a', 'b', 'c'];
d3.select('ul')   // selecciona el primer elemento ul
  .selectAll('li')// dentro del ul selecciona todos los li elementos
  .data(dataset)  // referencia el array con d3 utilizando .data 
  .enter()        // .enter ingreza los datos a d3
  .append('li')   // dependiendo de la cantidad del array craa li
  .text('New item'); // reemplaza el texto por cada item del array

// ejercicio 3
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select('body')
  .selectAll('h2')
  .data(dataset)
  .enter()
  .append('h2')
  .text('New Title')

```

### .text(t => t)

.text no solo ejecuta el texto que le ingrece,  
tambien puede resivir una funcion collbac para hacer uso de  
el array vinculado en d3, en este caso solo resive un argumento  
por cada elemento de el array vinculado  

```javascript
.text(t => t)
```

### .style('regla-css','atrivuto')

podemos estilizar una seleccion con style,   
style resive 2 argumentos separados por una coma para aplicar estilos  

```javascript
// hacer que todo el texto mostrado tenga font-family verdana
d3.selectAll('h2').style('font-family', 'verdana')
// hacer que la seleccion tenga color azul  
selection.style('color', 'blue');

// tambien se puede aplicar logica dentro de style
// este resive una funcion callback como segundo parametro
d3.selectAll('h2').style('color', d => {
  return d < 20 ? 'red': 'green'  // retorna color dependiendo del valor del h2
})

// transforma la altura de los div dependiendo de el valor
// generando un grafico de barras
d3.selectAll('div').style('height', d => d + 'px')

```

### .attr('html attribute', 'value')

.attr() puede reemplazar al metodo .style() aplicando mas que solo estilos  
puede resivir una callback tambien como segundo parametro  

```javascript
selection.attr('class', 'container');
d3.select('div').attr('class','bar')
```
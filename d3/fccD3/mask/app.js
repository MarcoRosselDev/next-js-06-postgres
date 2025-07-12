import select from "./node_modules/d3-selection/src/select.js"

const w = 800;
const h = 400;

const d = [2,4,5,7,3,2,1,5,6,1,11,2,4,20]
// d.sort() // ordanar de menor a mayor
// d.sort()// no funciona con n > 10 por que son comparado como strings.
// sort resive una fn como argumento que compara a y b como parametro de la fn.
// como son strings si restamos a y b automaticamente los compara como numeros
// y los ordena segun el resultado,
// si a - b es menor a 0 se mueve al indice anterior y se compara con el nuevo b
// y asi asta ordenar todo el array

/* d.sort((a, b) => {
  console.log(a, b, a - b);
  return a - b
}) // ordenar de mayor a menor */

d.sort((a, b) => a - b)

console.log(d);


select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h)

select("svg")
  .append("rect")
  .attr("width", 20)
  .attr("height", h)
  .attr("x", w/2)
  .attr("fill", "navy")



console.log("hola");

const arr = ["A","B","C"]
console.log(arr.join("    "));
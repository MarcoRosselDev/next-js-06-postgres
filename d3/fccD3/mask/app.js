/** @format */
import * as d3 from "d3";
console.log(d3, "vamos a utilizar vite desde ahora");

const w = window.innerWidth;
const h = window.innerHeight;

d3.select("body").append("svg").attr("width", w).attr("height", h);

d3.select("svg")
  .append("rect")
  .attr("width", 20)
  .attr("height", h)
  .attr("x", w / 2)
  .attr("fill", "navy");

console.log("hola");

const arr = ["A", "B", "C"];
console.log(arr.join("    "));

function callbackFun() {
  // queremos realizar un reRenderisado de circulos y aplicar un Math.random()
  // para que se muevan en forma siclica aplicando sin o cos de tringonometria
  // tambien queremos que los radios de los circulos sean vaiables con random
  // tambien podemos rendomisar la cantidad de circulos a incluir en el svg
}

window.requestAnimationFrame(callbackFun);

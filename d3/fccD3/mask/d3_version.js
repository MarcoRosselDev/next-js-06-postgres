import {select} from "./node_modules/d3-selection/src/index.js";
import range from "./node_modules/d3-array/src/range.js";


const h = window.innerHeight; // heigth o altura
const w = window.innerWidth; // width o ancho
const l = 30 // grosor de linea

/* const svg = select("body").append("svg");
svg.attr("width", w)
svg.attr("height", h) */

const svg = select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h)

const maskA = select("svg")
  .join("svg")
  .append("mask")
  .attr("id", "maskA")
const maskB = select("svg")
  .join("svg")
  .append("mask")
  .attr("id", "maskB")


// lineas translucidas para la mascara A
maskA.selectAll("rect.A")
  .data(range(18))
  .join("rect")
  .attr("y", (d) => d * 2*l)
  .attr("width", w)
  .attr("height", l)
  .attr("fill", "white")
  .attr("class", "A")

maskB.selectAll("rect.B")
  .data(range(28))
  .join("rect")
  .attr("x", (d) => d * 2*l)
  .attr("width", l)
  .attr("height", h)
  .attr("fill", "white")
  .attr("class", "B")


maskA.append("circle")
  .attr("class", "A")
  .attr("r", 200)
  .attr("fill", "black")
  .attr("cx", w/2)
  .attr("cy", h/2)
  .attr("mask", "url(#masA)")

svg.append("circle")
  .attr("class", "B")
  .attr("r", 200)
  .attr("fill", "navy")
  .attr("cx", w/2)
  .attr("cy", h/2)
  .attr("mask", "url(#maskB)")

// ract global de color navy para las lineas transparentes white
svg.append("rect")
  .attr("class", "globalRect")
  .attr("width", w)
  .attr("height", h)
  .attr("fill", "navy")
  .attr("mask", "url(#maskA")

/* 
svg.append("g") ----------> solucion de elemento group = g
  .selectAll(...)
*/

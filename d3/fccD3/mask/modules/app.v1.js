/** @format */
//import * as d3 from "d3";
import { select } from "d3";

const w = window.innerWidth;
const h = window.innerHeight;
//const sep = 10;

// add svg to the body HTML dom element
export const svg = select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

/* svg
  .selectAll("circle")
  .data(arr)
  .enter()
  .append("circle")
  .attr("r", 10)
  .attr("cx", (d) => d.x)
  .attr("cy", (d) => d.y)
  .attr("fill", "navy");
 */
let t = 0;
setInterval(() => {
  const data = vizData(t);
  circlesSvgs(data);
  t = t + 0.005;
}, 60 / 1000);

/* 
svg
  .selectAll("circle")
  .data(arr)
  .enter()
  .append("circle")
  .attr("r", 2)
  .attr("cx", (d) => d * sep)
  .attr("cy", (d) => h / 2 + Math.sin(d * 0.4) * 40)
  .attr("fill", "navy");
 */

/*
select("svg") // select svg
  .append("rect") // add a rectangle
  .attr("width", 20) // set attribute width to 20
  .attr("height", h) // set attribute height to const h
  .attr("x", w / 2) // set attribute x position to window width divide bi 2
  .attr("fill", "navy"); // set attribute color of rectangle to navy (azul marino)
*/

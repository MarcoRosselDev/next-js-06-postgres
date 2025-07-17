/** @format */
import { select } from "d3";
import { vizData } from "./modules/vizData.js";
import { circlesSvgs } from "./modules/circlesSvgs.js";

const w = window.innerWidth;
const h = window.innerHeight;

export const svg = select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

let t = 0;
setInterval(() => {
  const data = vizData(t, h);
  circlesSvgs(data);
  t = t + 0.005;
}, 60 / 1000);

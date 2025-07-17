/** @format */
import { range } from "d3";
//import { h } from "../app.js";

export function vizData(t, h) {
  const n = 10 + Math.sin(t) * 5;
  const arr = range(n).map((d) => ({
    x: d * 60 + 50,
    y: h / 2 + Math.sin(d * 0.5 + t) * 220,
  }));
  return arr;
}

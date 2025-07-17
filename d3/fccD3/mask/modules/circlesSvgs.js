/** @format */

import { svg } from "../app.js";

export function circlesSvgs(data) {
  svg
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("r", 10)
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y)
    .attr("fill", "navy");
}

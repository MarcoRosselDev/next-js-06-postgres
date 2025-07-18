import { objgh1 as ob } from './data.js'
import * as d3 from 'd3'

//console.log(ob);

export function barra(element) {
  
  const data = ob.data
  const {from_date, to_date} = ob;
  const max_x_value = data[data.length - 1][1];

  const width = 960;
  const height = 500;
  const marginTop = 20;
  const marginRight = 20;
  const marginBottom = 30;
  const marginLeft = 40;

  // Bin the data.
  const bins = d3.bin()
      .thresholds(40)
      .value(d => d[1])
    (data);

  console.log(bins);
  
  // Declare the x (horizontal position) scale.
  const x = d3.scaleUtc()
  .domain([new Date(from_date), new Date(to_date)])
  .range([marginLeft, width - marginRight]);

  // Declare the y (vertical position) scale.
  const y = d3.scaleLinear()
  .domain([0, max_x_value])
  .range([height - marginBottom, marginTop]);

  // Create the SVG container.
  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

  // Add a rect for each bin.
  svg.append("g")
      .attr("fill", "steelblue")
    .selectAll()
    .data(bins)
    .join("rect")
      .attr("x", (d) => x(d.x0) + 1)
      .attr("width", (d) => x(d.x1) - x(d.x0) - 1)
      .attr("y", (d) => y(d.length))
      .attr("height", (d) => y(0) - y(d.length));

  // Add the x-axis and label.
  svg.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))
      .call((g) => g.append("text")
          .attr("x", width)
          .attr("y", marginBottom - 4)
          .attr("fill", "currentColor")
          .attr("text-anchor", "end")
          .text("Unemployment rate (%) →"));

  // Add the y-axis and label, and remove the domain line.
  svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).ticks(height / 40))
      .call((g) => g.select(".domain").remove())
      .call((g) => g.append("text")
          .attr("x", -marginLeft)
          .attr("y", 10)
          .attr("fill", "currentColor")
          .attr("text-anchor", "start")
          .text("↑ Frequency (no. of counties)"));

  // Return the SVG element.
  //return svg.node();

  element.append(svg.node())
}
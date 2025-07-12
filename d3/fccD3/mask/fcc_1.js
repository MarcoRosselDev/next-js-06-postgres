/* import {select} from "d3-selection";
import range from "../node_modules/d3-array/src/range.js"; */
import * as d3 from "./node_modules/d3/dist/d3.js"

//console.log(d3.select);

const h = window.innerHeight;
const w = window.innerWidth;
const l = 30

document.addEventListener('DOMContentLoaded', ()=> {

  fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
    .then(res => res.json())
    .then(obj => {
      const {from_date, to_date, data} = obj;
      console.log(from_date, to_date)
      
    console.log(obj);
    console.log(data);
    // encontrar el valor mas alto de el array data
    const max_x_value = data[data.length - 1][1];
    //console.log(max_x_value);
    
    
    // Declare the chart dimensions and margins.
      const width = 640;
      const height = 400;
      const marginTop = 20;
      //const marginRight = 20;
      const marginBottom = 30;
      const marginLeft = 40;

      // Declare the x (horizontal position) scale.
    /* const x = d3.scaleUtc()
    .domain([new Date(from_date), new Date(to_date)])
    .range([marginLeft, width - marginRight]); */

    // Declare the y (vertical position) scale.
    const y = d3.scaleLinear()
    .domain([0, max_x_value])
    .range([height - marginBottom, marginTop]);

    console.log(y);
    
    // Create the SVG container.
  /*   const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height); */
    const svg = d3
      .select('body')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Add the x-axis.
    svg.append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x));

    // Add the y-axis.
    svg.append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y));

    // barras con ingo de data
    /* svg
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * 3)
    .attr('y', (d) => height - 3 * d)
    .attr('width', 25)
    .attr('height', (d) => d * 3)
    .attr('fill', 'navy') */
    //.attr('class', 'bar');
    svg
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i)
    .attr('y', (d) => d[1])
    .attr('width', 25)
    .attr('height', (d) => d[1])
    .attr('fill', 'navy')

    document.getElementById('main-div').append(svg.node());
  })

// svg.node() es un nodo "objecto" con el svg  
})
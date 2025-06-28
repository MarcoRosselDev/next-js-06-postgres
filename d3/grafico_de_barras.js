import d3 from 'd3'

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3
  .select('body')
  .append('svg')
  .attr('width', w)
  .attr('height', h);

svg
  .selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * 30)
  .attr('y', (d) => h - 3 * d)
  .attr('width', 25)
  .attr('height', (d) => d * 3)
  .attr('fill', 'navy')
  .attr('class', 'bar');
// Agrega tu código debajo de esta línea

svg
  .selectAll('rect')
  .append('title')
  .text(t => t)

// Agrega tu código encima de esta línea

svg
  .selectAll('text')
  .data(dataset)
  .enter()
  .append('text')
  .text(d => d)
  .attr('x', (d, i) => i * 30)
  .attr('y', (d) => h - (d * 3 + 3));
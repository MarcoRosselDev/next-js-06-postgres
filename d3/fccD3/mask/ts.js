//const arr = [1,4,2,9,2];

//console.log(arr.reduce((prev, curr) => prev + curr, 20)); // 38

const obj = [
  {key : "A" , value :"manzana"},
  {key : "B" , value :"pera"},
]

console.log(obj.reduce((prev, curr) => {
  //return {prev[key] : prev[value]}]
  prev[curr.key] = curr.value;
  return prev
}, {}));

// output
// { A: 'manzana', B: 'pera' }

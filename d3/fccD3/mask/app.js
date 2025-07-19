/** @format */
//const link = "https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv";

import { csv } from "d3";

const linkBeautifull = [
  "https://gist.githubusercontent.com/",
  "curran/", // usuario
  "a08a1080b88344b0c8a7/", // id
  "raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/", // commit
  "iris.csv", // nombre archivo
].join("");

/* async function data() {
  const data = await fetch(link);
  const response = await data.json();
  return response;
}
 */
console.log(linkBeautifull);

const fnDta = (data) => {
  data.sepal_length = +data.sepal_length;
  data.sepal_width = +data.sepal_width;
  data.petal_length = +data.petal_length;
  data.petal_width = +data.petal_width;
  data.species = +data.species;
  return data;
};

// csv(p1, p2) p1 = link.svg file || f2 = fn despues de resivair los datos csv
csv(linkBeautifull, fnDta).then((data) => console.log(data));

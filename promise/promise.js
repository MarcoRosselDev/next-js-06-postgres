function sumar(a, b) {
  return a + b
}

let promesa = new Promise((resolve, reject)=> {
  setTimeout(()=>{
    sumar(3,3)
  }, 4000)
})

promesa
  .then(valor => console.log("valor = ", valor, valor*2))
  .catch(error => console.log("error en el catch de la promesa : ", error))

console.log("hola");

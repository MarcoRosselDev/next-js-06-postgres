function sumar(a, b) {
  return a + b;
}

const promesa = new Promise((resolve, reject)=> {
  setTimeout(()=>{
    const logica = false;
    if (logica) {
      resolve(sumar(3,3))
    } else {
      reject("something happen!")
    }
  }, 4000)
})

promesa
  .then(valor => console.log("valor = ", valor, valor*2))
  .catch(error => console.log("error en el catch de la promesa : ", error))

console.log("hola");

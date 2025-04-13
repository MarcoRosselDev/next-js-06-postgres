// Promise.all(iterable);
//const promesas = Promise.all(iterable)

const promesa_1= new Promise((resolve, reject) => {
  let condicional = true
  if (condicional) {
    setTimeout(() =>{
      resolve("success promise 1")
    }, 2000)
  } else {
    reject("reject")
  }
  //condicional ? resolve("success") : reject(""); 
})

const promesa_2 = new Promise((resolve, reject) => {
  let condicional = true
  if (condicional) {
    resolve("success")
  } else {
    reject("reject")
  }
  //condicional ? resolve("success") : reject(""); 
})

const promesa_3 = new Promise((resolve, reject) => {
  let condicional = true
  if (condicional) {
    setTimeout(() =>{
      resolve("success promise 3")
    }, 4000)
  } else {
    reject("reject")
  }
  //condicional ? resolve("success") : reject(""); 
})

Promise.all([promesa_1, promesa_2, promesa_3])
  .then(values => {
    console.log(values);
  })
  .catch(error => {
    console.log(error);
  })
// los espera a todos, entonces debuele un array iterable
// respetando el orden en que se presento el array en promise.all
// [ 'success promise 1', 'success', 'success promise 3' ]
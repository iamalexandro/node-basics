function hello(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hello ' + name);
      resolve(name);
    }, 1000);
  });
}

function talk(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bla bla bla...");
      resolve(name);
    }, 1000);
  });

}

function bye(name) {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      console.log("bye bye, " + name);
      resolve();
      // reject('The server is down!');
    }, 1000);
  });
}

// ---

console.log("Starting process...");

hello("Nicola")
  .then(talk)
  .then(bye)
  .then(() => {
    console.log("Process finished");
  })
  .catch(error =>{
    console.log('There was an error');
    console.log('error: ' + error);
  })

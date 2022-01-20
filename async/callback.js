function sayHi(name, myCallback) {
  setTimeout(function () {
    console.log(`Hello ${name}, im async function`);
    myCallback(name);
  }, 1000);
}

function sayBye(name, myOtherCallback) {
  setTimeout(function () {
    console.log("bye bye, " + name);
    myOtherCallback();
  }, 1000);
}

console.log("Starting process...");

sayHi("Nicola", function (name) {
  sayBye(name, function () {
    console.log("Finishing process...");
  });
});

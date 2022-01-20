function hello(name, myCallback) {
  setTimeout(() => {
    console.log(`Hello ${name}, im async function`);
    myCallback(name);
  }, 1000);
}

function talk(callbackTalk) {
  setTimeout(() => {
    console.log("Bla bla bla...");
    callbackTalk();
  }, 1000);
}

function bye(name, myOtherCallback) {
  setTimeout(() => {
    console.log("bye bye, " + name);
    myOtherCallback();
  }, 1000);
}

//--

console.log("Starting process...");

// callback hell (DO NOT) ⬇️
// hello("Nicola", (name) => {
//   talk(() => {
//     talk(() => {
//       talk(() => {
//         bye(name, () => {
//           setTimeout(() => {
//             console.log("Finishing process...");
//           }, 1000);
//         });
//       });
//     });
//   });
// });
// callback hell ⬆️

//Solution -> Recursive

function conversation(name, times, callback) {
  if (times > 0) {
    talk(() => {
      conversation(name, --times, callback);
    });
  } else {
    bye(name, callback);
  }
}

hello("Nicola", (name) => {
  conversation(name, 3, () => {
    console.log("Process Finished");
  });
});

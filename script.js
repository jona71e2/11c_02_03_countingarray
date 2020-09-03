"use strict";

console.log("ArrayCount");

// window.addEventListener("load", init);

setInterval(init, 1000);

let count = 0;

const array = [];

function init() {
  count++;
  console.log("init");
  console.log(count);
  array.unshift(count);
  //array.splice(1, 0, count);
  console.log("længde:", array.length);
  console.log(array);
  if (array.length > 9) {
    array.splice(1, count);
  }
}

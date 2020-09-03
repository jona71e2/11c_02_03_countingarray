"use strict";

console.log("ArrayCount");

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
  if (array.length > 8) {
    array.splice(8, count);
  }
}

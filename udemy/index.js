var superheroes = require('superheroes');
var supervillains = require('supervillains');


var array = [];
var arrayV = [];

console.log("Heroes:");
for (var i = 0; i < 10; i++) {
  array[i] = superheroes.random();
}
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
console.log();
console.log("Villains:");
for (var i = 0; i < 10; i++) {
  arrayV[i] = supervillains.random();
}
for (var i = 0; i < array.length; i++) {
  console.log(arrayV[i]);
}

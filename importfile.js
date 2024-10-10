const notes = require('./note.js');
console.log('server file is available');

var age = notes.age;  // Import age from the note.js
var result = notes.addnumber(age+18,10);

console.log(age);
// var result = notes.addnumber(age+18);
// console.log("result is now " + result); //this will print [result is now NaN] because in var result i have only pass one parameter age+18, i dont pass another parameter 'b'which is mentioned in function

console.log("result is now " + result); //this will print 
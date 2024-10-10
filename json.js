const objectToConvert = {
    name : "Ankita",
    age : 19
};
 
const json = JSON.stringify( objectToConvert );
console.log(json);

console.log(typeof json);
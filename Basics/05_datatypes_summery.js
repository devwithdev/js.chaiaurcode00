// Primitive
// 7 Types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail = undefined;
const id = Symbol('123');
const anotherId = Symbol('123');

//console.log(id === anotherId);

const bigNumber = 35456484556541565n;
//console.log(typeof bigNumber);



// Reference (Non primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

//objects
let myObj = {
     name: "dev",
     age : 22,
};

const myFunction = function(){
    console.log("Hello World");
}


// Checking datatypes of above used data through typeof() function.
console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);

console.table([typeof score, typeof scoreValue]);










// const user = {
//     username: "hitesh",
//     welcomeMsg: function(){
//         console.log(`${this.username}, welcome`)
//     }
// }
// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()

// console.log(this); 
//  Why is it {} and not the global object?
// This is because Node.js wraps your code in a module using something like this internally:


// (function (exports, require, module, __filename, __dirname) {
//    // your code here
// });
// So at the top level of a Node.js module, this refers to module.exports — and by default, it's an empty object {}.
// but in  browser console, it refers to global object "window".

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()
// The reason you're getting undefined when calling console.log(this.username) inside the chai() function is because of how this works in JavaScript.

// Here’s a breakdown:

// 1. Regular Function Call (Not a Method)
// When you call a function like this:


// function chai() {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai();
// It is a regular function call, not a method of an object. In non-strict mode, this in such a function refers to the global object:

// In browsers, the global object is window.

// In Node.js, it's global.

// But you're declaring let username = "hitesh" — this is not attached to the global object; it is scoped inside the function only.

// 2. Why this.username is undefined
// You're trying to access this.username, but username is a local variable in the function. It does not exist on the global object or on this. So:


// this.username // is undefined
// ✅ Fix: Use object method or log the variable directly
// If your intention was just to access the variable, do:


// console.log(username); // will print "hitesh"
// If you intended to use this, do it in an object context:


// const obj = {
//     username: "hitesh",
//     chai: function () {
//         console.log(this.username);
//     }
// }

// obj.chai(); // will print "hitesh"


// const chai = function () {
//     let username = "hitesh"
//     console.log(this);
// }
// chai()

// ******************arrow function ***********
// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }
// chai() 

//clear difference
// const obj = {
//     name: "Hitesh",
//     regular: function () {
//         console.log("Regular:", this.name);
//     },
//     arrow: () => {
//         console.log("Arrow:", this.name);
//     }
// };

// obj.regular(); // "Regular: Hitesh"  ✅ Works as expected
// obj.arrow();   // "Arrow: undefined" ❌ `this` doesn't refer to `obj`

// //Breakdown:
// Context	'this' refers to
// Top-level in Node.js	:module.exports (i.e. {})
// Inside a function	:global (in non-strict mode)
// Inside a class method:The class instance (this)
// In arrow functions	:Inherits this from parent scope

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// // const addTwo = (num1, num2) =>  num1 + num2

// // const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// // const myArray = [2, 5, 3, 7, 8]

// // myArray.forEach(function(){})
// // myArray.forEach(()=>())
// // myArray.forEach(()=>{})

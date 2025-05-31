// javascript is a dynamically types language
// primitive data types
// String,Number,Boolean,null,undefined,Symbol,BigInt
const score=100
const scoreValue=100.3

const isLOgIn =  true
const temp = null
let email;

const id =  Symbol('123')
const id2 =  Symbol('123') //return unique value

const bigNumber = 25464545634554654n

console.log(id==id2);

// reference/non-primitive type
// Array,Objects, functions

const heroes = ["shaktiman","batman","superman"];

let obj={
    name:"rocky",
    age: 22,
}

const myfunc = function(){
    console.log("hello moto");
}

console.log(typeof myfunc)

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object
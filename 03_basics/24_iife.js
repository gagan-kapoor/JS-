// Immediately Invoked Function Expressions (IIFE)

//used for stopping pollution due to global variables

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //semicolon is must to end this function execution

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
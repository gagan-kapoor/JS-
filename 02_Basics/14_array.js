//array
const myarr=[0,1,2,3,4,5,"yash","ameen",9.3,'a']
console.log(myarr[0])

// //shallow copy->same reference Point
// //deep copy->different reference point
const myaar2= new Array(1,2,3)

myarr.push(8)
console.log(myarr)
myarr.pop()

myarr.unshift(9) //shift all elements and insert at index 0
console.log(myarr);

myarr.shift(9) //emove 0th index element
console.log(myarr);

myarr.includes(9)
myarr.indexOf(3)
const newarr= myarr.join() //returns string
console.log(myarr)
console.log(newarr); 

//slice , //splice
const myn1 = myarr.slice(1,3)
console.log(myarr);
console.log(myn1)

const myn2 = myarr.splice(1,3)
console.log(myarr);
console.log(myn2);
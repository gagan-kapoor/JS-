//Dates

let myDate= new Date();
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


// let anotherdate= new Date(2023,0,23);
// let anotherdate= new Date(2023,0,23,5,3);
// let anotherdate= new Date("2023-01-14");
let anotherdate= new Date("01-14-2024");
console.log(anotherdate.toLocaleString);

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(anotherdate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString('default',{
    weekday: "narrow"
}))





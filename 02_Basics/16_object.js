//singleton(one instance) ->if object is created using constructor
//Object.create

// object literals

const sym=Symbol('key1')
const user= {
    name: " yash",
    "full name": "yash rajput",
    [sym] : "mykey1",
    age:18,
    email: "yash@gmail.com"
}
// console.log(user.name); //bad practice

// console.log(user["name"])
// console.log(user["full name"]);

// console.log(user[sym])

user.email = "yash@outlook.com"

// Object.freeze(user) //can't change user now

user.greeting = function(){
    console.log("hello user");
}
user.greeting2 = function(){
    console.log(`hello user, ${this.name}`);
}
console.log(user.greeting());
console.log(user.greeting2());


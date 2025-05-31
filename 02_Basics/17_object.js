//singleton objects

const user  = new Object() //singleton
// const user = {} //non-singleton

user.id="123abc"
user.name="Sam"
user.islog = false

const regularuser= {
    email: "abc@gmail.com",
    fullname: { 
        fristname: "Yash",
        lastname: "chopra"
    }
}
console.log(regularuser.fullname?.lastname);

const obj1= {1:"a",2:"b"}
const obj2= {3:"a",4:"b"}

// const obj3={...obj1,...obj2} //spread operator
const obj3 = Object.assign(obj1,obj2) //copy both obj in first object obj1
const obj_3 = Object.assign({},obj1,obj2) //copy both obj in another object obj_3
console.log(obj3);

const users= [
    {
        id:1,
        email: "abc@gmail.com"
    },
    {
        id:1,
        email: "abcd@gmail.com"
    },
    {
        id:1,
        email: "abcde@gmail.com"
    },
    {
        id:1,
        email: "abcdef@gmail.com"
    }
]
console.log(users[1].email)

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty('islog'));




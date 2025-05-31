// primitive->stack return copy
// reference->heap  return reference/address in heap

let user={
    email: "xyz@.com",
    id: 123
}
console.log(user.email);

user.email = "abc@.com"
console.log(user.email);
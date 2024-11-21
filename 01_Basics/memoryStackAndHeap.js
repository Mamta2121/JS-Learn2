
//stack=>Primitive
/*
-->Primitive Types (Stack Memory)
Primitive data types (e.g., String, Number, Boolean, undefined, null, Symbol, BigInt) are stored in the stack memory, which is fast and stores fixed-size data.

When you assign a primitive value to a new variable, a copy of the value is created.
Changing the value of one variable does not affect the original.
*/
//heap=>Non-Primitive
/*
-->Non-Primitive Types (Heap Memory)
Non-primitive data types (e.g., Object, Array, Function) are stored in heap memory, which is used for dynamic and larger memory allocations.

When you assign a non-primitive value (e.g., an object) to a new variable, a reference to the same memory location is created.
Changing one reference affects the other because both refer to the same object.
*/


let myName = "Mamta"

let otherName = myName 
otherName = "Mamta Rajera"

console.log(myName);
console.log(otherName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

console.log( userOne.email)

let userTwo = userOne
userTwo.email = "user2@google.com"

console.log(userTwo.email);
console.log(userOne.email);

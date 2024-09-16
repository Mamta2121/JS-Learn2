
//stack=>Primitive
//heap=>Non-Primitive


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
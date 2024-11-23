// singleton  constructor se singleton bnta hai
//-> Object.createObject()

//object literals => not singleton

//declaring symbol

/*
const mySym = Symbol("key1")


const jsUser = {
      //key: value(can be any thing string boolean number array object)
        name: "mamta",    //"name": "mamta" //key behind the seen is a string
        "full name": "mamta rajera",  //if key is made a string this can not be accessed using dot, only using square brackets
        //use symbol as a key
        //mySym: "myKey1",  //this is not the way to use symbol as key
        [mySym]: "myKey1", //this is the way to use symbol as key
        age: 18,
        location: "Jaiupur",
        email: "mamta@google.com",
        isLoggedIn: false
}   //{} means object 


//Dot Notation: Easy and common, but fails for keys with special characters or spaces.
Bracket Notation: Necessary for dynamic keys, keys with spaces, or symbols.

console.log(jsUser.email)  //using dot //not a good way
console.log(jsUser["email"]) //using square bracket
console.log(jsUser["full name"]) 
jsUser["like"] = true
console.log(typeof jsUser["mySym"]) //it is still a string not symbol
console.log(typeof jsUser[mySym])



//Making change in value

jsUser.email = "rajera@google.com"

//to stop changes to any object , freeze it

//Object.freeze(jsUser)  // now no changes is reflected in the object

jsUser.email = "mamta@google.com"

console.log(jsUser)


//putting function inside object

jsUser.greeting = function(){
    console.log("hello js User")
}

console.log(jsUser.greeting)  //IMP -> function ka refernce aaya
console.log(jsUser.greeting())

jsUser.greeting2 = function()
{
    console.log(`Hello js User ${this.name}`)  //this has reference to currrent object
}

console.log(jsUser.greeting2())   


//zyda ter hm . se object se access krta hai, but kabhi kabhi hume [] use krna he pdta hai , n case of a symbol as a key or in case of string value as a key
*/



let a = { name: "mamta"}
//let b = {surname: "rajera"}
//let c = {name: "mamtarajera"}

let d = Object.assign({},a)

console.log(a)

console.log(a == d)
//console.log(b)
//console.log(c)
console.log(d)


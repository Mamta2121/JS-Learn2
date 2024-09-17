// singleton  constructor se singleton bnta hai
//-> Object.createObject()

//object literals => not singleton

//declaring symbol

const mySym = Symbol("key1")


const jsUser = {
      //key: value(can be any thing string boolean number array object)
        name: "mamta",    //"name": "mamta" //key behind the seen is a string
        "full name": "mamta rajera",  //this can not be accessed using dot, only using square brackets
        //use symbol as a key
        //mySym: "myKey1",  not this way
        [mySym]: "myKey1",
        age: 18,
        location: "Jaiupur",
        email: "mamta@google.com",
        isLoggedIn: false
}   //{} means object 


//to access object

console.log(jsUser.email)  //using dot //not a good way
console.log(jsUser["email"]) //using square bracket
console.log(jsUser["full name"])
console.log(typeof jsUser["mySym"]) //it is still a string not symbol
console.log(typeof jsUser[mySym])



//cahneg value

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


//zyda ter hm . se object se access krta hai,,, but kabhi kabhi hume [] use krna he pdta hai

/*
console.log("M")
console.log("A")
console.log("M")
console.log("T")
console.log("A")

function sayMyName(){
    console.log("M")
console.log("A")
console.log("M")
console.log("T")
console.log("A")
}


//sayMyName -> reference of function
sayMyName()// -> Execution of function
*/

/*
function addTwoNumbers(number1, number2)   // definition me PARAMETERS
{
    console.log(number1+ number2)
}

addTwoNumbers(3,4)     //all ke time ARGUMENTS
addTwoNumbers(3,"4")
addTwoNumbers(3, null)
addTwoNumbers()

const result = addTwoNumbers(3, 5)  //no return value inside result

console.log("Result: ", result)  
*/

/*
function addTwoNumbers(number1, number2)   // definition me PARAMETERS
{
    return number1 + number2
}

let result = addTwoNumbers(3,5)
console.log(result)

function loginUserMessage(username = "Sam"){ //providing a default value in case no value is provided .....so it never goes into if statement
    if(!undefined)
    {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("mamta"))
console.log(loginUserMessage()) //no arg passed 
*/


//When No of Arguments is not known => Example : making a shoping kart


//if no of argument is fixed we can make parameters for them like this
/*
function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(8))
*/

//using REST OPERATOR........Takes multiple values
// ... operator => this is spread operator
/*
function calculateCartPrice(...num1)
{
    return num1  //converts into aray
}

console.log(calculateCartPrice(100,200,200,500))
*/



//passing object to function
const user = {
    username: "mamta",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)

handleObject({ username: "sam", price: 399})


//passing array to function

const myArray = [200, 400, 100, 600]

function returnSecondValue(getArray)
{
    return getArray[1]
}

returnSecondValue(myArray)
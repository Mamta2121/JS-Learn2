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


/*
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
*/


/*
//ways to declare function
//#1 way using function declaration => name is mandatory 
function func1(){
    console.log("Func1")
}

//#2 way using function expression => with a name
let func2 = function func(){
    console.log("Function Expression")
}


//#2 way using function expression => without a name
let func3 = function(){
    console.log("FE")
}

func1()
console.log(func1)


 //func()//error
 //console.log(func) //error
 
 
func2()
console.log(func2)
func3() 
console.log(func3)
*/


/*
//copy
let func4 = func1;
func4()
console.log(func4 == func1)  //same refernce

//provided different refernce
func4 = function(){
    console.log("Func4")
}

func4()
console.log(func4 == func1) //false //no more same

*/



/*
//function hoisting 
//#function declaration

func1()
function func1() 
{
    console.log("FD")
}

//#function expression

func2()
let func2 = function(){
    console.log("FE")
}

func1();
func2();
*/


//Function Closure and Nested Function

function func1() 
{
    let x1 = 90
    let y = 20

    function func2()
    {
        let x2 = 100
        y = 100
        x1 = 100
        console.log(x1) //allowed
    }

    func2()
    console.log(y)
    //console.log(x2) //not allowed
}


func1()

//func2() //error //calling out of the scope
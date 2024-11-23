
++++++++++++++++++++++++++++++++++++++++++++What is function?++++++++++++++++++++++++++++++++++++++++++++++++++++
    A function in JavaScript is a block of reusable code designed to perform a specific task.
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

+++++++++++++++++++++++++++++++++++++++++Parameters and Arguments+++++++++++++++++++++++++++++++++++++++++++++++++
    ->Parameters are the placeholders in the function definition.
    ->Arguments are the actual values passed during function calls.
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

+++++++++++++++++++++++++++++++Default Parameters++++++++++++++++++++++++++++++++++++++  

function loginUserMessage(username = "Sam"){ //providing a default value in case no value is provided .....so it never goes into if statement
    if(!username)
    {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("mamta"))
console.log(loginUserMessage()) //no arg passed 
*/

+++++++++++++++++++++++++++++++++++++Spread Operator++++++++++++++++++++++++++++++++++++++++++++
    If the number of arguments is unknown, the rest operator (...) can be used to gather all arguments into an array.
//When No of Arguments is not known => Example : making a shoping kart
//if number of argument is fixed we can make parameters for them like this
/*
function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(8))

//using REST OPERATOR........Takes multiple values
// ...variablename => this is spread operator

function calculateCartPrice(...num1)
{
    return num1  //converts into array
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
//Ways to declare function
//#1 way using function declaration => name is mandatory  -> HOISTED
function func1(){
    console.log("Func1")
}

//#2 way using function expression => with a name -> NOT HOISTED
let func2 = function func(){
    console.log("Function Expression")
}


//3 way using function expression => without a name -> Anonymous function
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
console.log(func4 == func1)  //same reference

//provided different refernce
func4 = function(){
    console.log("Func4")
}

func4()
console.log(func4 == func1) //false //no more same

*/



/*
//function hoisting 
//#function declaration -> Hosted

func1() //no error
function func1() 
{
    console.log("FD")
}

//#function expression -> Not Hoisted

func2() //error
let func2 = function(){
    console.log("FE")
}

func1();
func2();
*/


/*
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
*/




//default parameter
/*
function func1(a,b=1)
{
    return [a,b]
}
console.log(func1(1,2));
console.log(func1(1))
console.log(func1())
console.log(func1(undefined))
console.log(func1(2,undefined))
*/


//spread operator to make rest parameters
function func1(a, ...b)
{
    console.log(a);
    console.log(b, b.length);
}

func1()
func1(1)
func1(1,2)
func1(1,2,3,4,5,6,6,7,8)


let score  = 400  //here score can bet any value  //variable
//score = "800"
console.log(score)

let balance = new Number(100) //but here it's data type is specific //object
//balance = "900"
console.log(balance) //see this , you will realise what's the difference

console.log(balance.toString())   //covert integer into string and now use string methods on it
console.log(balance.toString().length) //using string property => length
console.log(balance.toFixed(2)) //to reduce the precision value //IMP //it fixes the no of digits after decimal


//to decide precision of number
const  otherNumber = 123.8966

console.log(otherNumber.toPrecision(4))


// to represent big values in good way
const hundreds = 100000

console.log(hundreds.toLocaleString()) //US Standards

console.log(hundreds.toLocaleString('en-IN')) //Indian Standards






// +++++++++++++++++++++++++   MATHS ++++++++++++++++++++++++++++++

//see all methods once from console log inspect of browser





console.log(Math) //object with lot of properties and functions => To see all do the same in Browser inspct

//make positive

console.log(Math.abs(-4))

//round off
console.log(Math.round(4.6)) //always give top rounded value

console.log(Math.ceil(4.2)); //Same as round

console.log(Math.floor(4.2)) //Always give down rownded value

//max min

console.log(Math.max(1,3,4,5))
console.log(Math.min(1,4,2,3))


//random

console.log( Math.random())
console.log((Math.random()*10 ) + 1)
console.log(Math.floor((Math.random()*10 ) + 1))


console.log(Math.max())


//IMP
const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1)+min) )
 /* ---> Math.random() provides a base random number in [0, 1).
Scaling it with (max - min + 1) adjusts the size of the range.
Adding min ensures the range starts at the desired min value.
Using Math.floor() ensures the result is an integer.*/

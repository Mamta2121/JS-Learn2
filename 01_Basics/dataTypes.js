/*
---->
Primitive Data Types in JavaScript
JavaScript has 7 primitive data types:

Number: Represents numeric values, including special values like Infinity, -Infinity, and NaN.
BigInt: For representing numbers larger than 2^53 - 1.
String: Represents textual data enclosed in quotes (' ', " ", or ` `).
Boolean: Represents true or false.
Null: Represents an explicit absence of a value.
Undefined: Represents a variable declared but not assigned any value.
Symbol: Used for creating unique identifiers.
*/

"use strict"; //treat all JS code as newer version

//alert(3+3) //this is available to use in BROWSER, But not here in NODEjs Enviroment, Basically here it has a different syntax


let x = "mamta";
let y = 80;
let isLoggedIn = false;

/*
console.log(typeof "hitesh")
console.log(typeof y)

console.log(typeof null) Although null is a primitive, typeof null returns "object".

console.log(typeof undefined)

console.log(-Infinity);
console.log(-1/-0);

console.log("mamta"/0);
console.log(NaN*NaN);
console.log( NaN ** 0);
*/

/*
let m = 1;
console.log( "This is a string");

//console.log(This is a string) //Not a string 

console.log('This is a string too');

console.log(`This is a string toooo ${m}`);  //see anything written inside ${} is first evaluated , and then appended to the string 

console.log('This is a string ${x}'); //${} only works in backtick `` not in double quote or single quote

*/

/*
let m = null;
console.log(m);
console.log(null);
console.log(null*2);
console.log(null/null);
console.log(null+null);
console.log(null*null);
console.log(null*Infinity);
console.log(0/0);
*/

/*
let m = undefined
let n
console.log(n)
console.log(m)
console.log(undefined)
console.log(undefined*3)
console.log(undefined*undefined)
console.log(undefined/undefined)
console.log(null*undefined)
*/

console.log(typeof 1)
console.log(typeof 1n)
let m = 90
console.log(typeof m)
console.log(typeof "Mamta")
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof Infinity)
console.log(typeof NaN)
//console.log(typeof undefined*NaN)


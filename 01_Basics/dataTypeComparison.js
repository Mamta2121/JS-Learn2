//In JS , string gets converted into number many a times implicitly , which sometimes leads to unexpected results
//Hence try that  Both Values are of same data type


//No Problem wale conversion

//number number //string //string
/*
console.log( 1 < 2)
console.log( 1 > 2)
console.log( 1 >= 2)
console.log( 1 <= 2)
console.log( 1 == 2)
*/


/* Strings like "1" are converted to numbers if possible.
Non-numeric strings like "2ab", "null", and "undefined" become NaN.
comparisons with NaN are always false*/
//string any other other type
//different data tyep string and number being compared

/*
console.log( "1"< 2)
console.log( "2ab" < 2)
console.log( "null" < 2)
console.log( "undefined" < 2)


//Avoid this type of comparison=> Not a clean Code Hence not recommended 
----->Relational operators (<, <=, >, >=) trigger numeric conversion for null. This is why null is treated as 0 in comparisons like null < 2 and null >= 0.
----->Equality operators (== and ===) do not trigger numeric conversion for null. Instead:
null == undefined is true because they are considered "equal" in loose equality.
null == 0 is false because null is not converted to 0.

//null
console.log( null < 2)
console.log( null == 2)
console.log( null == 0)
console.log( null >= 0)


//undefined
console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

//comparing null and undefined 
--->Special Rule for null and undefined:

In loose equality (==), null is only equal to undefined and no other value.
null == undefined evaluates to true

--->Why?
When using relational operators (<, <=, >, >=), JavaScript attempts to convert the values to numbers for comparison. Here's how it processes null < undefined:

undefined as a Number:
When undefined is converted to a number, it becomes NaN.

null as a Number:
When null is converted to a number, it becomes 0.

Comparison with NaN:
Any comparison (<, >, <=, >=) involving NaN always returns false.
Since undefined is converted to NaN, the result of null < undefined is false

console.log( null == undefined); //true
console.log(null < undefined); //false


//===
//Strict Check => data type as well as value comparison
console.log( "2" === 2)
*/



//==

/* 
console.log( 1 === 2)
console.log( false ===false)

console.log( "mamta" === "mamta")
console.log( "mamta" === "mamtaRajera")


console.log( "" === false)
*/

console.log( null === undefined)

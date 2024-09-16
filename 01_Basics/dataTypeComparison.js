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


//string any other other type
//different data tyep string and number being compared

/*
console.log( "1"< 2)
console.log( "2ab" < 2)
console.log( "null" < 2)
console.log( "undefined" < 2)


//Avoid this type of comparison=> Not a clean Code Hence not recommended

//null
console.log( null < 2)
console.log( null == 2)
console.log( null == 0)
console.log( null >= 0)


//undefined
console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)


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
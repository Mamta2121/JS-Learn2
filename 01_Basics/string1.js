const name = "Mamta"
const repoCount = 50



//this is old way of concatinating variables with string 
console.log(name + repoCount + "Value")


//newer way of doing this is using BackTicks

console.log(`My name is ${name} and my repocount is ${repoCount}`)

//With backticks, strings can span multiple lines easily without special characters.

let infoOne = `My
        Name
        is
        Mamta`;

// double quotes (") do not support multiline strings without escaping newlines (\n).
        /*
let infoTwo = "My //error
       name
       is 
       mamta" 
       */

       /*
       
//Literal Strings->1st way of making string
let str1 =  "my name is mamta"
console.log(str1.length) 

//String Objects->2nd way of making string
let str2 = new String("my name is mamta")
console.log(str2.length)

console.log(typeof str1) //string
console.log(typeof str2) //object
*/

/*Strings in JavaScript are immutable,
meaning their individual characters cannot be changed after the string is created.
Assigning a new value to str3 works because it replaces the entire string, 
not just a part of it:

*/


/*

let str3 = "Game"

console.log(str3);

str3[0] = "N"

console.log(str3) //no change reflected

str3 = "Name"

console.log(str3)
*/

let str1 = "mamta"

console.log(str1.toUpperCase())

console.log("mamta".toUpperCase())

console.log("Mamta"[0].toLowerCase())



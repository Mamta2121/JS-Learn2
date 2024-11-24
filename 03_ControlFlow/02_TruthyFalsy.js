const userEmail = "m@mamta.ai"

if(userEmail)  //string having something is assumed to be true //empty string assumed to be false
{
    console.log("cot user email")
}
else 
{
    console.log("Don't have user email")
}

//falsy Values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy Values

// Everthing except falsy values are truthy values "0", 'false, " ", [], {}, function(){}

//Check array is empty or not

const userEmails = []

if(userEmails.length === 0)
{
    console.log("Empty Array")
}

//check if object is empty or not

const userInfo = {}


//keys function return array of keys of object passed to it
if((Object.keys(userInfo)).length === 0)
{
    console.log("Empty Object")
}



//false == 0 => true
//false == '' => true
//0 == '' => true




// Nullish Coalescing Operator (??):   returns the first non-null or non-undefined value.

let val1 = 5 ?? 10   //first non null value gets assigned
let val2 = null ?? 10
let val3 = undefined ?? 15
console.log(val1);   //5
console.log(val2);   //10
console.log(val3);  //15

//Both operands are nullish->Since ?? can’t find a valid value, it defaults to returning the last evaluated value in the chain.
let val4 = null ?? undefined
let val5 = undefined ?? null

console.log(val4)
console.log(val5)

let val6 = null ?? 10 ?? 10

console.log(val6)


//Ternary Operator

// condition ? true : false

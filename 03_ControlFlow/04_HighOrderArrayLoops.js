/*
for...of: Iterates over values of arrays, strings, maps, set and other iterables (best for working with values).
for...in: Iterates over keys (or indices) of objects and arrays (best for objects or accessing properties).
forEach(): Iterates over values of arrays (best for performing side-effects on each element, but can't exit early).
*/



//array object specific loops
//1. for of


//["","",""]
//[{},{},{}]



//iterate an array
const arr= [1,2,3,4,5]
for(const num of arr)
{
    console.log(num);
}

const greetings = "Hello World!"
for(const greet of greetings)
{
    console.log(`Each char is ${greet}`)
}


//iterate a map
const mp = new Map()
mp.set('IN', "India")
mp.set('USA', "United States of America")
mp.set('Fr', "France")


console.log(mp)
for(const key of mp)
{
    console.log(key);
}

for(const [key, value] of mp)
{
        console.log(key, ':', value);
}



//iterate an object-> cannot iterate an obbject using for of
const myObj = 
{
    'game1': 'NFS',
    'game2': 'Spiderman'
}

//error
for(const [key, value] of myObject)
{
    console.log(key, ':', value);
}

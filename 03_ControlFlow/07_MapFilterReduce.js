//1 map()
/*
Purpose: Creates a new array by transforming each element in the original array using a callback function.
Does not modify the original array.
Often used for transforming data (e.g., applying a calculation or changing the structure of objects).
const newArray = array.map(callbackFunction);
*/

//2 filter()
/*
Purpose: Creates a new array containing only the elements that satisfy the given condition in the callback function.
Does not modify the original array.
Often used for selecting subsets of data.
const filteredArray = array.filter(callbackFunction);
*/

//3 reduce()
/*
Purpose: Reduces the array to a single value by applying a callback function repeatedly to each element (along with an accumulator).
Often used for aggregating data (e.g., summing values, finding products, etc.).
Does not modify the original array
const result = array.reduce((accumulator, currentValue) => {
  // Return updated accumulator
}, initialValue);
*/
//filter method => ((paramter) => condition)
/*
const myNums = [1,2,3,4,5,6,7,8,9,10]


//implicit return 
//const newNums = myNums.filter ((num)=> num > 4)

//agr scope open kr liya means {} yeh likha to return keyword use krna pdega

//Not implicit other
/*
const newNums = myNums.filter( (num) => {
    return num>4
})
*/


/*
//doing same thing using forEach
const newNumsNums = []
myNums.forEach ((num) => {
    if(num > 4)
    {
        newNums.push(num)
    }
})
console.log(newNums)
*/

/*
//map method

const myNum = [1,2,3,4,5,6,7,8,9,10]


//1st -> implicit return 
//const newNum = myNum.map ( (num) => num+10)


//2nd -> block{} open kiya to No Implicit return
const newNum = myNum.map ( (num) => {return num+10})
console.log(newNum)

*/

/*
//chaining  mthod inside mthod

const myNum = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNum
                    .map ( (num) => num*10)
                    .map( (num) => num+1)
                    .filter( (num) => num >= 40)

console.log( newNum)
*/


const myNums = [1, 2, 3]

const myTotal = myNums.reduce( function (acc,currval){
    console.log( `acc: ${acc} and currval: ${currval}`)
    return acc + currval
}, )

console.log(myTotal)



/*
const myArr1 = [ "a", "b", "c"]

const myArr2 = [ "d", "e", "f"]


console.log(myArr1.length)
myArr1[-1] = "100"
console.log(myArr1[-1])


myArr1[900] = "x"

console.log(myArr1.length)


myArr1.value = 90000000000  // problrm here -> WHY ? 
//bEcause array is a object itself so it behaves like a object=> insert key value pair only



//myArr1.push(myArr2);  // not a good way to merge using push, because since we know array in js can take type of data

console.log(myArr1);  
console.log(myArr2);


//use concat method  //returns a new array without modifying the existing array

myArr1.concat(myArr2); // no change in myArr1

const myArr3  = myArr1.concat(myArr2);

console.log(myArr1);
console.log(myArr2);
console.log(myArr3);


//using spread operator => spread elements of array into indiviual element

const myArr4 = [...myArr1, ...myArr2]
console.log(myArr4);


//array inside array inside array => using flat

const myArr5 = [1,2,3,[4,5],[6,7,[8,9,[10,[11]]]]];

const myArr6 = myArr5.flat(Infinity) //to solve any depth

console.log(myArr6)

//to convert anything into array

console.log(Array.isArray("Mamta"))
console.log(Array.from("Mamta"))  //making array out of string

           //This is imp case
console.log(Array.from({name:"mamta"})) //making array out of an object -> IT can not decide array key pe bnana hai ya phir aray values pe banana hai..isliye yeh empty array dega incase it can not decide



//to make array from multiple different values
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));




//imp toooooooo
let arr = []
arr[900] = 5
console.log(arr.length)
arr.value = 25
console.log(arr)
console.log(arr.length)


let arr2 = [1,2,3]
let arr3 = arr2

console.log( arr2 === arr3)


arr3.push(9)

console.log(arr2)

*/



//splice.....................................
/*
let arr = [ 1,2,3,4,5,6]

let arr2 = arr.splice(1,4);

console.log(arr)
console.log(arr2)


let arr3 = [1,2,3,4,5,6]

let arr4 = arr3.splice( 2,0, 900, 1000, 1200, 1400)

console.log(arr3)
console.log(arr4)
*/


//slice......................................
/*
let arr1 = [1,2,3,4,5,6]
console.log(arr1.slice());
console.log(arr1.slice(1,4))

console.log(arr1.slice(1))

console.log(arr1.slice(-3))

console.log(arr1.slice(-3,-2));

console.log(arr1)
*/


//concat...............................................

let arr1 = [1,2,3]
let arr2 = arr1.concat()
let arr3 = arr1.concat(arr2)


let arr4 = [].concat(1,2,3,4,5)

let arr5 = arr1.concat(arr2,arr3,[9,10,11],[11,12,13])
console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(arr4)
console.log(arr5)

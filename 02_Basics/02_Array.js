

const myArr1 = [ "a", "b", "c"]

const myArr2 = [ "d", "e", "f"]



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


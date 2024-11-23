//Way to make an Array in JS

//#1 Way -> Array Literal 
const myArr = [0,1,2,3,4,5,] 
//const myArr = [0,1,2,3,true,"mamta"]
//Mix of datatype
//index start from 0 => Not like myArr["one"], but instead use myArr[1]
//shallow copy

//#2 Way -> Using Array Constructor
const myArr2 = new Array(1,2,3,4);
console.log(myArr2);

//Array Methods
//push -> insert at the end 

myArr.push(6);
console.log(myArr)

//pop => remove from end

myArr.pop()
console.log(myArr)


//unshift => insert at the start

myArr.unshift(9)
console.log(myArr)

//shift => remove from the start

myArr.shift()
console.log(myArr)


// ++++++++++++++++++++++++++ #2 ++++++++++++++++++++++++++++++


//true false wale method


console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join(); //converts array to a string, joining the elements by the separater provided as the parameter. BY DEFAULT -> ,

console.log(newArr);   //data type of newArr is string
console.log(myArr);



// ++++++++++++++++++++++++++++ #3 ++++++++++++++++++++++++++++++++++++++


//slice //splice

const myn1 = myArr.slice(1,3);  //second parameer index is not included and no change in original array

console.log("A ", myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3); //second parameter index is  included and also change  in original array

console.log("B ",myArr);
console.log(myn2);





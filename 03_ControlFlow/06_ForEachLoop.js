//for each loop

const coding  = ["js", "ruby", "java", "python", "cpp"]


//callback function is the first parameter of forEach

//callback function does not have a name

//vo automatically hr ek value pe jata hai 
//yha pe val jo likha hai uski jgh kuch bhi bhi likh skte hai , not a specific keyword
coding.forEach( function(val){
    console.log(val);
})


// callback function can be a arrow functon too

coding.forEach( (item)=>{
     console.log(item)
})

// function bahr bnaya to bhi usko as paramete pass kr skte hai as first argument of forEach loop

function printMe(item)
{
  console.log(item);
}

//function ka refernce bhejenge 
coding.forEach(printMe)




//three things forEach gets
//forEach ke pass tin cheeze aati hai value at each index, index, or pura ki pura array bhi
//yha item index arr sirf naam hai inki jgh aap koe bhi naam likh skte hai
coding.forEach( (item, index, arr) => {
        console.log(item, index, arr);
})


//object inside array ...for each loop help in it alot

const myCoding = [
    {
        languangeName: "javascript",
        languageFileName: "js"
    },
    
    {
    languangeName: "java",
    languageFileName: "java"
    },

    {
        languangeName: "C++",
        languageFileName: "cpp"
    }
]


myCoding.forEach( (item)=> {
      console.log(item.languageFileName)
})



const myNums = [1,2,3,4,5,6,]


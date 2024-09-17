//scope 


//{............} => this block defines scope with function , if ,loop

//outside this {............} => it is called global scope

/*
let a = 200
const b = 300
var c = 400


if(true)
{
    let a = 1000
    const b = 1200
    var c = 1400
}

console.log(a)
console.log(b)
console.log(c)   //here value of c is overwritten by c inside if ...
              //  this is problamatic ...because c inside if must have its scope within {}  only ...and it should not affect outside 
              // therefore VAR is not used
*/

//Nested Scope => Function inside Function


//bde chote se icecream nhi mang skte
//chote bade se icecream mang skte
function one(){
    const userName = "mamta"

    function two(){
        const webaite = "youtube"
        //console.log(userName)
    }

    //console.log(website)  //error ...
    two()
}

one()


//if inside if

if(true)
{
    const username = "mamta"
    if( username === "mamta")
    {
        const website = "youtube"
        //console.log(username+ website)
    }

    //console.log(website)  //1st error
}

//console.log(username) //snd error




// ++++++++++++++++++++++ interesting +++++++++++++++++



//aise bhi funtion bnte hai
addOne(5)   //no problem calling before declaration//diff in this two come calling before declaration
function addOne(num)
{
    return num + 1;
}


//Expression => variable holding a function
//aise bhi bnte hue dikhenge aage jake
addTwo(5)   //cannot call before declaration //Hoisting //error 
const addTwo = function(num){
    return num + 2
}
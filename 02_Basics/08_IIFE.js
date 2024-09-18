//Immediately Invoked Function Expression (IIFE) -> Jaise he function likha vaise he execute 

//file containing the database connection ...

//to avoid the pollution from GLOBAL SCOPE


/*
function chai()
{
    console.log("DB CONNECTED")
}

chai()
*/

//named IIFE -> Having a function name
(function chai()
{
    console.log("DB CONNECTED")
})();  //this semicolon is must ..isse is function ko pta hoga ki uska context yhi tak hai

 
//()()
//(..............Write function definition...........)(..........it is function calling->may contain arguments need to be send while calling that function...................) )


//function definition may be a arrow function too

( ()=> 
{
    console.log("DB CONNECTED TWO");
})();  //if the simcolon is not there at the end of previous IIFE , next IIFE will never execute, gives error



( (name) => 
{
      console.log(`DB CONNECTED TWO ${name}`);
})('mamta');
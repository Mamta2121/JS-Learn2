//closure

//#1Example of closure

/*
function x() {
    let a = 7;

    function y(){
        console.log(a);
    }
    y();
}

x(); //7
*/

//#2 example of closure


/*
function x(){
   let a = 7;
   function y(){
    console.log(a);
   }
   a =100  
   return y; //here closure of y is returned ..that is functiondefinition along with its lexical scope as well..lexical scope containes refernce to all the variables in its parent's scope(like a's refernce)
}
let z = x();
console.log(z)   //at this point Executtion context of x() is completely gone x is gone at this point

////////......1000 of line of code....

//now calling z
z(); //still remembers 'a' //hence it gives 7 not undefined
//after changing

*/



//this code is also same as above
/*
function x(){
    let a = 7;
    return function y(){
     console.log(a);
    }
    //return y; //here closure of y is returned ..that is functiondefinition along with its lexical scope as well
 }
    */



 
 //function indside function insode function
function z()
{
    function x(){
       let a = 7;
       function y(){  //con
        console.log(a);
       }
       y() //here closure of y is returned ..that is functiondefinition along with its lexical scope as well
    }
    x()
}

z()
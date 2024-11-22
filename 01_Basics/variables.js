/*
  1) var 
  ->var is function-scoped, meaning it is accessible only within the function where it is declared.
  ->It does not respect block scope, so it is accessible outside of if, for, or other block statements.
  ->var declarations are hoisted, meaning they are moved to the top of their scope during the compilation phase.
  ->However, the value is not hoisted, so accessing it before declaration returns undefined.
  ->Can be reassigned and redeclared within the same scope without errors.

  2)let
  ->let is block-scoped, meaning it is accessible only within the block {} where it is defined.
  ->let declarations are also hoisted, but they are placed in a "temporal dead zone" (TDZ) from the start of the block until the declaration is encountered.
  ->Accessing a let variable before its declaration results in a ReferenceError.
  ->Can be reassigned but cannot be redeclared in the same scope.

  3)const
  ->Similar to let, const is block-scoped.
  ->Like let, const is hoisted but remains in the temporal dead zone until the declaration is encountered.
  ->Cannot be reassigned or redeclared in the same scope.
  ->If const is used to declare an object or array, the reference cannot be changed, but the contents can be modified.

  *Temporal Dead Zone 
  ->The Temporal Dead Zone (TDZ) is a behavior in JavaScript that applies to variables declared with let and const. 
  ->It refers to the time between the beginning of the scope and the point where the variable is declared and initialized.
  ->During the execution of a block of code, JavaScript's engine knows that let or const variables exist (because of hoisting).
  ->However, these variables cannot be accessed until their declaration is encountered in the code.
  ->Attempting to access such variables in this "zone" results in a ReferenceError.
  ->Variables declared with var are initialized to undefined during hoisting, so no TDZ exists for var.
  {
    console.log(y); // Outputs: undefined (no TDZ for `var`)
    var y = 20;
    console.log(y); // Outputs: 20
  }
  {
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 10;
    console.log(x); // Outputs: 10
  }


  ->TDZ with Functions
  Functions declared with function do not experience TDZ, as they are fully hoisted. However, functions assigned to let or const do.
  {
    console.log(foo()); // Outputs: "Hello, world!" (no TDZ for function declarations)
    function foo() {
        return "Hello, world!";
    }
  }

  {
    console.log(bar()); // ReferenceError: Cannot access 'bar' before initialization
    const bar = function () {
        return "Hello!";
    };
  }
*/


const accountId = 80859;
let accountEmail = "mamta157@gmail.com"
var accountPassword = "12345"
accountCity =  "Jaipur" //also allowed //but shouldn't be used



//let accountEmail = "mgmail.com"// Cannot Redeclare -> let and const do not allow redeclaration in the same scope
let accountState
/* 
   Prefer not to use var 
   Because of issue in block scope and functional scope
*/

//accountId = 2 //not allowed
accountEmail = "mr@";
accountPassword = "2121211";
accountCity = "Bengaluru";
console.log(accountId);

console.table([accountId,accountEmail,accountCity,accountState]) //To print multiple variable using one concole statement

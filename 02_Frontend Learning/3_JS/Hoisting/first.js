
"use strict"    //to avoid bugs of variable
                // dont use :
                // var a=10;
                //  b=30;


// // Hoisting:  everything are hoisted at the top of their respective scope

// var x=undefined;
// let y;
// const z;


// x=10;
// y=20;
// z=30;

// console.log(x);
// console.log(y);
// console.log(z);


greet();       // not and error because of hoisting

function greet(){
    console.log("hello first");
}


// meet();    // here meet=undefinded ( so how you execute the undefined) so error

let meet = function(){
   console.log("hello bro");
}

console.log(meet());     // not and error (after hoisting they initialize and used)


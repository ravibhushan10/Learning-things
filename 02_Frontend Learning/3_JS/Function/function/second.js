"use strict"

let a=20;
let b=30;
function f1()
{
    {
        let x=40;     //  let is a block scope so it is accessible only this block not entire function
        var y=50;
        console.log(x);
        console.log(y);
    }
    console.log(y);   //  var is  function scope  so it is accessible function scope
}



f1();
"use strict"

// Global Object : it's a type of object that containing the all function that we used in entire js file(like iostream in c++)
// definition of all function written in global object
// global object are accessible from anywhere 



//  the name of global object in different according to environment

//  Browser    :   window   (in browser :  window.Math.random())
//  Node.js    :   global  ( global.console.log())
//  Everywhere :   globalThis (it works in any environment)



// The all function are comming from the global object
console.log("ravi");
console.log(Math.random());
const ravi=new Object();
const lokesh=new String();


globalThis.console.log("ravi");   //it works in everywhere(browser,node.js .....) so this is better to use so you code run in every platform

global.console.log("ravi");       // it only  works in node.js



// if you want  to see the all things in global
console.log(global);





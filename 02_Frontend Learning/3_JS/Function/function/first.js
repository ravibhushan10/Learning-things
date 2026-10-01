"use strict"
// 4 types of function behaviour


// Takes nothing , returns nothing
function fun()
{
    console.log("hello");
}
fun();



// Takes something , returns nothing
function fun2(name)  //formal argument
{
    console.log("Hello ",name);
}
fun2("Ravi");  //actual argument
fun2("Lokesh");



// Takes something , returns something
function sum(a,b)
{
    console.log(`sum of ${a} and ${b} is:`,a+b);
}
sum(3,4);




// Takes nothing , returns something
function multiplication(a,b)
{
    return a*b;
}
let result=multiplication(3,4);
console.log(result);
// The this keyword in javascript is a special keyword that refers to 
//  the context in which  the current code is being executed.
// its value depends on how the function where this is used is called


// Behaviour of this keyword


// 1: Global Context (outside any function)
// In browsers : window
// In Node.js  : Module's exports object

// global scope
let a=20;
const b=90;
// all are part of global object
var c=80;
function f1(){
    console.log("hello ravi");
}
console.log(this);     //{} = in local environment this point to empty object








// 2: Inside a Function
// (i)  :(Non-Strict Mode)
// when this is used inside a regular function , it refers to the global object
// (ii) : Strict Mode
// this will be undefined inside a function


"use strict"
function greet()
{
    console.log(this);
}
greet(); 




// 3: Inside a Method (object context)

const obj={
    name:"ravi",
    age:20,
    meet:function()
    {
        console.log(this);

        // console.log(this.name);  // ravi

    }
}

obj.meet();   //{ name: 'ravi', age: 20, greet: [Function: greet] } == here this point to object




// 4: Arrow Function
// Arrow function don't have their own this.
// instead , they inherit this from the surrounding (lexical) scope.


// first case:
let customer={
    name:"lokesh",
    age:12,
    set:()=>{
        console.log(this);   // here surrouding(lexical) scope of this set() is our local environment node.js not a object
    }
}
customer.set(); 


// second case:
const obj2={
    name:"ravi",
    age:20,
    out:function()
    {
        let ab=()=>{
            console.log(this);   // here this is pointing to our lexical scope i.e. out () 
            // { name: 'ravi', age: 20, out: [Function: out] }
        }
        ab();
    }
}
obj2.out();



//  5: Inside a Constructor or Class
//     in consturctor and class , this refers to the instance of the object being created.

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
let d =new Person("ravi",30);   //here this is pointing d(instance)
console.log(d);


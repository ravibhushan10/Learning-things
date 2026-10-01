// Non premitive data types

// array,object,function 

let arr=[13,42,23,32,42,32,23];
// you can use different type of data in a single array
let arr2=[13,42,23,32,42,32,23,"ravi","lokesh",true,];
console.log(arr);
console.log(arr2);
// its typeof is object 
console.log(typeof arr);

// object =key:value

let obj={
    user_name:"rohit",
    account_number:3478993,
    balance:300
}

console.log(  obj);
console.log(typeof obj);

// function 
let fun=function(){
    console.log("hello ravi kaise ho ");
    return 10;
}
console.log(fun());
console.log( typeof fun); /* function ka typeof = function */


fun=45;
console.log( typeof fun);
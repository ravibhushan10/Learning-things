
// function function_name(formal parameter: type):return_type of function

// return type optional if you not used then transpiler automatically find its type as a number

function greet(a:number):number{
console.log(a);
    return a+5;
}
console.log(greet(5));


// if you don't return anything then its "void"
function meet(msg:string,val:number){
    console.log(msg,val);
}
console.log(meet("hello ravi",20));


// Default parameter

function neet (msg:string="ravi"){
    console.log(msg);
}
neet();
neet("lokesh");


// optional parameter
function Gate(person?:string)
{
    console.log(person || "Mohan");
}
Gate("Rohit");
Gate();


// Arrow function
const sum =(a:number,b:number):number=>{
   return a+b;
}
console.log(sum(3,4));




// Call back function

type chill=(amount:number)=>void;

function f1(order:number,callback:chill):void
{
     const amount:number=order+10;
     callback(amount);
};
f1(10,(amount)=>{
    console.log(amount);
});


// Rest parameter

function total(...arr:number[]){
    let ans:number=0;
    arr.forEach((val:number)=>ans=ans+val);
    console.log(ans);
}
total(12,32,233,32,321,321,123312,312,312,43,243,243);


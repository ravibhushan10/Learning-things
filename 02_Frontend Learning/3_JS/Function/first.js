// normal function
function greet(){
    console.log("hello ravi");
    console.log("kaise ");
}

greet();


function sum(number1,number2){
    console.log(number1+number2);
    return number1+number2;
}
 let total=sum(2,3);
 console.log(total);


 function mul(a,b){
    return a*b;
 }
 console.log(mul(3,4));



//   function we can store in variable(anonymous)

const fun=function(){
    console.log("hello ravi");
    return "money";
};
console.log(fun());


// Arrow function

const fun2=()=>{
    console.log("arrow function");
}
fun2();

const fun3=(a,b)=>{
    return a+b;
}


// other way to write arrow function 
const fun4=(a,b)=> a+b;
console.log(fun4(3,50));


// if you have only one parameter then no need to write ()
const cube= a => a*a*a;
console.log(cube(4));

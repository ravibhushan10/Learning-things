// scope ke bare me

// global scope  = asseccible from anywhere(like inside function,object,for loop,if-else)
let a;
var b;
const c=23;


    
// local(function) scope = asscessible within the function only  not asseccible from the outside
    function greet(){
      
       let num=10;
       var string="ravi";  
       const age=23;
    }
greet();
 

// Block scope= the variable are accessible only in block but var are accessing from outside the block
// if any amount is comming from outside then block amount is overide the amount so thats why don't use var
// var is not a block scope this is a functional scope
var amount=4000;
var amount=40;
var amount=6000;
if(true)
{
    let a=10;
    var amount=20;
    const c=90;
}
console.log(amount);



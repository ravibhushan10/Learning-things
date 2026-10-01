
// using rest operator (...)
// it collect multiple argument into an array
const sum=function(...number){
    // one by one consume all number and find the sum using for loop
    
     console.log(number);
}
sum(2,3);
sum(2,3,54,54);
sum(2,3,54,54,45,23,321);


// difference between rest and spread

// rest operator= one by one value dalna into array

// spread operator= one by one value nikalan from array


let obj={
    name:"ravi",
    age:23,
    amount:340
}

// passing object into function
function fun(obj2){
  console.log(obj.name,obj.amount);
}

// destructuring of object
function fun({name,amount}){
  console.log(name ,amount);
}
fun(obj);
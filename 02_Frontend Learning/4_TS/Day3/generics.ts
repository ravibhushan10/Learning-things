// Generics: Generics in Typescript allow you to create flexible, reusable components by enabling you to specify types as parameter in functions, classes ,interfaces and other constructs. This helps provide type saftey while keeping the flexibility to work with various data types.


// Generic:Template

function value(a:(number| string| number[])):(number|string |number[]){
    return a;
}
console.log(value("ravi"));
console.log(value(12));
console.log(value([10,21,12,21]));



// To solve this issues 
function f2<T>(a:T):T{
    return a;
}

// you can specify the type during call or leave it it automatically detect
console.log(f2<string>("ravi"));
console.log(f2(12));
console.log(f2([10,21,12,21]));
console.log(f2(true));



interface admin<T,U>{
    name:string,
    age:number,
    aadhar:T,
    salary:U
}

const obj43:admin<number,number>={
     name:"rohit",
     age:20,
     aadhar:22243423,
     salary:4234234
} 

const obj3:admin<string,number>={
     name:"rohit",
     age:20,
     aadhar:"3432423423",
     salary:243423
} 
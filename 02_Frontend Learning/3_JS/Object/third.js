// destructring of an object/array = use the each value according to own use 

const obj={
    name:"ravi",
    age:23,
    balance:2334234,
    aadhar:"87973423428",
    location:"muzaffarpur"
};

// const {name,balance}=obj;
// console.log(name,balance);

// const {name:full_name,age:umar}=obj;      // give variable name according to own
// console.log(full_name,umar);       



// using rest operator(...)
// here name and age goes to obj and remaining goes to obj2
const{name,age,...obj2}=obj;
console.log(name,age);
console.log(obj2);


// destructure of an array
const arr=[3,54,3,23,24];

// const[first,second]=arr;
// const[first,second,   ,fourth]=arr;

const[first,...newarr]=arr;
console.log(first);
console.log(newarr);
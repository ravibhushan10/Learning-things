// Non - primitive type


// Array

let arr:number[]=[2,3,4,2,3,2,2];

let arr2=[4,4,34,34,34];  //type number(automatically detect)


// Mixed type
let arr3:(string | number )[]=["ravi",34];  
arr3.push("Lokesh");
// arr3.push(true);  //arr3 only aspecting string and number


// Tupples are arrays with a fixed number of elements of specific types.

const Tupple:[string , boolean]=["ravi",false];
Tupple.push("Lokesh");
console.log(Tupple);


// Object
let obj1={        //automatic type define by typeinfrencence
    name:"ravi",
    age:20,
    gender:"male"
};


// inline
let obj2:{name:string,age:number,gender:string}={         //type define by you 
    name:"ravi",
    age:20,
    gender:"male"
};


// predefined type

let person:{name:string,age:number,bank_balance:number};
person={
    name:'ravi',
    age:20,
    bank_balance:2323
}
let n1:number;
n1=32;


// type Allice
type customer={
    name:string,
    age:number,
    gender:string
};

let c1:customer={
    name:"ravi",
    age:20,
    gender:"male"
}




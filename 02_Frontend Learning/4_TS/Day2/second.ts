
// use interface for object don't use type
// in type allices you can't use multiple allices


// TypeScript allows multiple declarations of the same interface.
// it is very strong ==you can use multiple with same name it merge all same name to single

interface admin{
    name:string,
    age:number,
    position:string
};

interface admin{
   id:number
};


let obj3:admin={
    name:"ravi",
    age:20,
    position:"CM",
    id:34423243 
}



// extend keyword
interface human{
    name:string,
    age:number
};
interface Teacher extends human{
    salary:number,
    id:string
}

interface Bankmanager extends Teacher{
     position:string
}
const obj6:Bankmanager={
    name:"ravi",
    age:32,
    salary:22323,
    id:"43v3v54v3",
    position:"Head"
};
console.log(obj6);
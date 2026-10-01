// // class method
// class person{
//     constructor(name,age,gender)
//     {
//        this.name=name;
//        this.age=age;
//        this.gender=gender;
//     }

// }
// // use class if you want to create multiple object if the key of all are same
// let per1=new person("ravi",20,"male");
// let per2=new person("lokesh",50,"male");
// console.log(per1);
// console.log(per2);

let obj={
    name:"ravi",
    age:30,
    account_balance:423,
    gender:"male"
};

// all key find
// it is return the array
let arr=Object.keys(obj);
console.log(arr);


// all value find
// it is return the array
let arr1=Object.values(obj);
console.log(arr1);


// both key:value
 let arr2=Object.entries(obj); //it return in the form of 2D array
 console.log(arr2);



//  assign use case
const obj1={a:1,b:2};
const obj2={c:3,d:4};


// const obj3=Object.assign(obj1,obj2); //here obj1 is  changed because whatever have changed is assingend to target obj1 

// so use empty{} object as a target so whatever change done that store in empty object 

// here you can give multiple source for the combine

// Object.assign(target , source );

const obj3=Object.assign({},obj1,obj2);
console.log(obj3,obj2,obj1);


Object.freeze(obj1);
// when object is freeze then we can't add property ,delete and modify its value
obj.name="ravi";
obj.a=10;
delete obj1.a;
console.log(obj1);


Object.seal(obj1);
obj.name="ravi";
obj.a=10;
delete obj1.a;
console.log(obj1);

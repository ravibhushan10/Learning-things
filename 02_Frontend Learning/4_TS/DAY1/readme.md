 <!-- Feature of TS  -->

// 1. Early Error detection: TS detect the error at compile time (code writing time ) but js show error at runtime

// 2. Type Safety: when you decleare any let age=20; then furthur you can't assign any other(string,bool,obj) in age you only assing NUmber type value . It gives you error at compile time

// 3. Better Developement Experince:it smooth debugging process code readable.

// 4. Support OOPS Feature: it support oops feature like public , private, protected.




<!--  Basically typescript is strict to data type -->

let balance=200;
let age=20;

// here if anyone change the data in during program then our output differ
// but we want balance and age contain only number type value

// its very difficult to debugg


//   why we use the TS over JS 

balance="this is a number";
age="Twenty";


console.log(balance*10);
console.log(age+10);


let obj={
    name:"Ravi",
    age:20,
}
console.log(obj.height);  //undefined == its giving but height in not their in obj then we want it give me error but not



<!-- Setup Process of TS  -->

<!--  to install TS compiler : type in cmd -->
// 1: npm install -g typescript     (g: global(we can use in anywhere in my stytem))
// 2: tsc --version

<!--  How to run TS file -->
// tsc file_name
// tsc file_name.ts --target es2016

<!-- shortcut to run ts file  -->
    (tsc --init)
1: firstly download the config file to tell which version compile to every time 

<!-- Config file means -->
which protocol and which which way use to convert ts file into js (like strict mode,version)


<!-- Migration  -->
migration: when you entire code base converted into the new version . 

eg: amazon using the es2016(js version) and they want to convert into es2024 , then this is called migration.

<!-- why company do migration -->
when small updates comes in js then amazon don't do migration but when js have big updates(like more powefull update some extra features) then amazon do the migration.

but the migration is very huge tasks entire code converted into new version
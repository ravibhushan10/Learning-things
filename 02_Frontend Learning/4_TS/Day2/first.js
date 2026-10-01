"use strict";
// Non - primitive type
Object.defineProperty(exports, "__esModule", { value: true });
// Array
let arr = [2, 3, 4, 2, 3, 2, 2];
let arr2 = [4, 4, 34, 34, 34]; //type number(automatically detect)
// Mixed type
let arr3 = ["ravi", 34];
arr3.push("Lokesh");
// arr3.push(true);  //arr3 only aspecting string and number
// Tupples are arrays with a fixed number of elements of specific types.
const Tupple = ["ravi", false];
Tupple.push("Lokesh");
console.log(Tupple);
// Object
let obj1 = {
    name: "ravi",
    age: 20,
    gender: "male"
};
// inline
let obj2 = {
    name: "ravi",
    age: 20,
    gender: "male"
};
// predefined type
let person;
person = {
    name: 'ravi',
    age: 20,
    bank_balance: 2323
};
let n1;
n1 = 32;
let c1 = {
    name: "ravi",
    age: 20,
    gender: "male"
};
//# sourceMappingURL=first.js.map
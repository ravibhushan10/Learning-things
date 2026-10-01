"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
// if a person don't have a aadhar then how it fill
// so use optional
const obj = {
    name: "rohit",
    age: 20,
    gender: "male",
    aadhar: 7686678678 //here you can aadhar remove it also because its optional for any object
};
//  1: Partial<customer>
// all property are optional
const obj2 = {
    name: "ravi",
    balance: 23
};
//  2: required<customer>
// all property are Required(you can't leave anyone)
const obj3 = {
    name: "ravi",
    age: 23,
    balance: 23
};
//  3: Readonly<customer>
//  you can only read the value
const obj4 = {
    name: "ravi",
    age: 23,
    balance: 23
};
// obj4.name="mohan";  //you can't change(modify) the value of any property 
// *************Array of object***********
// First method to write
const arr = [{ name: "ravi", age: 20, }, { name: "lokesh", age: 21, }];
;
const arr2 = [{ name: "ravi", age: 20, }, { name: "lokesh", age: 21, }];

"use strict";
// Generics: Generics in Typescript allow you to create flexible, reusable components by enabling you to specify types as parameter in functions, classes ,interfaces and other constructs. This helps provide type saftey while keeping the flexibility to work with various data types.
Object.defineProperty(exports, "__esModule", { value: true });
// Generic:Template
function value(a) {
    return a;
}
console.log(value("ravi"));
console.log(value(12));
console.log(value([10, 21, 12, 21]));
// To solve this issues 
function f2(a) {
    return a;
}
console.log(f2("ravi"));
console.log(f2(12));
console.log(f2([10, 21, 12, 21]));
console.log(f2(true));

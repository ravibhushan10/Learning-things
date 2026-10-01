"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class person {
    name;
    age;
    constructor(n1, n2) {
        this.name = n1;
        this.age = n2;
    }
    greet() {
        console.log(`hi ${this.name}`);
    }
}
const obj2 = new person("rohit", 20);
console.log(obj2);
obj2.greet();
// Public , private, protected
class Customer {
    name;
    age;
    account;
    constructor(name, age, account) {
        this.name = name;
        this.age = age;
        this.account = account;
    }
    // you can also give the (access modifier) to function
    // public,private,protected
    meet() {
        console.log(this.age);
    }
}
;
const c1 = new Customer("Deepak", 20, 2423423);
console.log(c1.name);
class Employee extends Customer {
    // By default everyone is public
    salary;
    constructor(salary, name, age, account) {
        super(name, age, account); // constructor call for parent class
        this.salary = salary;
    }
}
;
const e1 = new Employee(423243, "ravi", 23, 23);

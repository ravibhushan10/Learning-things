// if key is undefinded and null
const obj={
    undefined:30,
    null:40
}
console.log(obj.undefined);
console.log(obj[undefined]);
console.log(obj["undefined"]);

console.log(obj.null);
console.log(obj[null]);
console.log(obj["null"]);


// new way to create object 
const person=new Object();

// property add latter
person.name="ravi";
person.age=30;
person.gender="male";
console.log(person);   //{ name: 'ravi', age: 30, gender: 'male' }

// delete  = both key and value is deleted
delete person.name;
console.log(person);   //{ age: 30, gender: 'male' }

// modify/update
// if the key is present then value is updated otherwise new key is generated
person.name="lokesh";
person.age=50;
console.log(person);   //{ age: 50, gender: 'male', name: 'lokesh' }


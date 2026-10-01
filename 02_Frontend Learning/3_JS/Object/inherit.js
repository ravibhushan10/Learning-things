let user1={
    name:"ravi",
    age:20
}
let user2={
    amount:40,
    
}
// here user2 is a prototype of user 1 that all properties inherity by user 1
// the all property shows in console is a prototype 

// this is not a feasible way to change the prototype use down method
// user2.__proto__=user1;   

user2=Object.create(user1);

console.log(user2.age);
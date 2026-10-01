// another way to combine more objects together

// spread operator


const obj1={a:1,b:2};
const obj2={c:3,d:4};
const obj3={e:5,f:6};

// use three dots
// ye obj1 and obj2 and so on ke sare value ko khol deta hai(individual item me) and usko yaha place karata hai jo obj4 me store hoga
const obj4={...obj1,...obj2,...obj3};

obj4.c=3434;
console.log(obj4);
console.log(obj2);


// copy the array

let arr=[3,4,5,2];
let newarr=[...arr];
console.log(newarr);
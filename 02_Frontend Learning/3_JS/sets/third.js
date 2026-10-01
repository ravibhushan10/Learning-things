// Union and Intersection

//Union
let set1=new Set([10,20,30,40,50,60,70]);
let set2=new Set([10,20,30,40,89,76,43]);

let set3= new Set([...set1,...set2]);
// console.log(set3);


// Intersection

// filter:only apply on array
let result4=new Set([...set1].filter((num)=>set2.has(num)));
console.log(result4);


// Iterate over sets

for(let value of set1)
{
    console.log(value);
}

// iterate over sets
set1.forEach((value)=>console.log(value));




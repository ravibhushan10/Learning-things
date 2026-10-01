const user_id=new Set(["ravi.32","rohit_12","mohit_32","ravi.12"]);
let new_user="rohit_22";
console.log(user_id.has(new_user));

user_id.clear();  // it erase(delete the all element from the set)

console.log(user_id.size);


// convert array to set

let arr=[10,20,30,20,10,40,50,30,45,23,12];

let set1=new Set(arr);
console.log(set1);

// convert set to array
let newarr=[...set1];
console.log(newarr);
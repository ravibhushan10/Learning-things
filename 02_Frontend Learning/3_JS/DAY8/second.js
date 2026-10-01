let arr=[3,5,"ravi",true,'c'];
console.log(arr);


let newarr=arr;
console.log(newarr);
console.log(newarr==arr); //true = because it store only reference which is equal of both arry but only one arry is created that is stored in heap



// how to create two arry but its value is coppied from another
// it is very helpfull 
let newarray=structuredClone(arr);
console.log(newarray==arr);  //false = because both have different reference


// insert elements in arry at last postion
arr.push(40);
arr.push("lokesh");
console.log(arr);

// insert elements in arry at first postion
arr.unshift(40);
arr.unshift("radha");
console.log(arr);



// delete  elements in arry at last postion
arr.pop();
arr.pop();
console.log(arr);




// delete elements in arry at first postion
arr.shift();
arr.shift();
console.log(arr);



// delete operation = it delete the elements but the space is not free reserved for that one is called "hole" don't use further for anyone index is remain same

// so don't use delete operation
delete arr[0];
delete arr[0];
console.log(arr);


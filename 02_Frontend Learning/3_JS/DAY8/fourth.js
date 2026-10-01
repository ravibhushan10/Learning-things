let arr=[4,6,"ravi",false,'e'];

// both convert the arry into string but join gives you flexibility to add something in between 
console.log(arr.toString());
console.log(arr.join("*"));


// concatation = add multiple array and make one new array
let arr1=[2,4,5,43];
let arr2=[10,30,40,50,50];
let arr3=[10,30,40,50,50];
let arr4=[10,30,40,50,50];

let arr5=arr1.concat(arr2);  

let arr6=arr1.concat(arr2,arr3,arr4);

console.log(arr5);
console.log(arr6);

// in this case the arr2 hole array treated as a single elements in arr1 array
arr1.push(arr2);
console.log(arr1);   //[ 2, 4, 5, 43, [ 10, 30, 40, 50, 50 ] ]

console.log(arr1[3]);  //43
console.log(arr1[4]);  //  [ 10, 30, 40, 50, 50 ]

// now your array is becomes 2D array
console.log(arr1[4][0]);  // 10 
console.log(arr1[4][2]);  //40


//  use of flat() = by default it take 1 as a argument means it flat the value at one level

//  convert 2D array into 1D array
 let arr=[[1,2,3],[4,5,6],[7,8,9]];
 console.log(arr.flat());

 //  convert 3D array into 1D array
 let arr1=[[1,2,[10,20,30]],[4,5,6],[7,8,9]];
 console.log(arr1.flat(2));
 // if we use only one level in 3D then
 console.log(arr1.flat(1));  //[ 1, 2, [ 10, 20, 30 ], 4, 5, 6, 7, 8, 9 ]



// convert any dimensional array into 1D array
let arr3=[[1,2,[10,20,[2,4,3,[6,5,4,[45,3434,[5454,6754]]]]]],[4,5,6],[7,8,9]];
console.log(arr3.flat(Infinity));

// how to verify you are getting array or something from backend
let abc=[1,2,2,3,4];
console.log(Array.isArray(abc));


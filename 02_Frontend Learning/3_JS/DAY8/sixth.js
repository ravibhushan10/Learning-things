// 2D array

let arr=[[1,2,3],[4,5,6],[7,8,9]];
// [1,2,3]
// [4,5,6]
// [7,8,9]
console.log(arr);   //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log(arr[0]);  //[ 1, 2, 3 ]
console.log(arr[1]);  //[ 4, 5, 6 ]
console.log(arr[2][1]);


// convert 2D array into 1D array
// flat()= use to convert into 1D arary
let newarr=arr.flat();
console.log(newarr); //[1,2,3,4,5,6,7,8,9]



// 3D array
let arr1=[[10,20,30,[1,2]],[40,50,60,[3,5,6]],[70,80,90]];

console.log(arr1[0][3][1]);   //2
console.log(arr1[1][3][2]);   //6


// 4D array
let arr2=[[10,20,30,[1,[1,2,3]]],[40,50,60,[3,5,[4,5,6,7]]],[70,80,90]];

console.log(arr2[0][3][1][1]);   //2
console.log(arr2[1][3][2][3]);   //7
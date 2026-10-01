let arr=[3,4,24,23,23,23,"ravi",432.3,true,'c',null];
console.log(arr);
console.log(arr.length);


console.log(arr[2]);
console.log(arr.at(1));
// it takes negative index also which is lattest one
console.log(arr.at(-1));



const arr2=[3,4,24,23,23,23,"ravi",432.3,true,'c',null];
console.log(arr2);
arr2[2]=54334;
// we can chnge the value of arry , object,function even its const because it store in heap and its reference store in stack 
console.log(arr2);


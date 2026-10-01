let arr=[4,6,"ravi",false,null,'e'];
console.log(arr.indexOf('e'));
// it gives you the first and last occurance of that elements
console.log(arr.indexOf(6));
console.log(arr.lastIndexOf(6));

console.log(arr.includes("ravi"));  //true = it gives value in true or false
console.log(arr.includes(5));


// slice = last index is included
console.log(arr);
console.log(arr.slice(2,6));
// original arry is not modified in slice
console.log(arr);



// splice (starting index se,  total values)
console.log(arr.splice(2,3));
// but here arry is modified and only remaining elements will be present in array
console.log(arr);




let ravi=[4,8,"ravi","lokesh",'c',true,false,90];

// splice(starting_index, total_element_delete ,  add value)
// it add the value form starting index that you provided during splice
console.log(ravi.splice(1,4,7,"lokesh"));
// here you can add unlimited value in add value
console.log(ravi);


// if you want to add only elements form any index use splice
console.log(ravi.splice(1,0,7,"lokesh"));
console.log(ravi);
let string1="hello ravi";
console.log(string1);
console.log( typeof string1);
// normally memory allocated for the string in stack 


//other way to create string
// memory allocation in heap
let str=new String("hello ravi");
console.log(str);
console.log(typeof str);  /* object  */
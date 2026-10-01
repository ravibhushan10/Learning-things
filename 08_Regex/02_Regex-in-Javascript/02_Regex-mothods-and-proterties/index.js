/*
exec()
test()
lastIndex
*/

const str="The rain in Spain mainly stays in the plain."
const regex=/in/g

// simillar here has the properties like (input,index,groups)
console.log(regex.exec(str)); //return only the first match(INDEX) without global flag

// with global flag(each time find the next "in")
console.log(regex.exec(str));
console.log(regex.exec(str));
console.log(regex.exec(str));
console.log(regex.exec(str));
console.log(regex.exec(str));
console.log(regex.exec(str));  //return null in last



// *************How to add the properties on array (because at the array is a object so i can add the any properties on object)
const arr=[20,89];
arr.input="what is your name";
arr.group="ravi";
console.log(arr);

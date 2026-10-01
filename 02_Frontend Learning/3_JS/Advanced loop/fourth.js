// for in loop : Isko array ke sath nahi lete

// array at the end is object

const arr=[10,20,30,40];
arr.name="rohit";
arr.age=23;
// in this case it also print the key (name,age )  which is wrong in the context of  array 
// when anyone by mistake change the value then this happen
// so better to use normal for loop
for(let key in arr)
{
    console.log(key);
}
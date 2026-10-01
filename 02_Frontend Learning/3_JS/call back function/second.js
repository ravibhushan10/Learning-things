// for of loop = it used to print(iterate) value over array string
// for of loop used in itterable
const arr=[10,20,30];

for(let value of arr)
{
    console.log(value);
}

let str="ravi is a good boy";
for(let i of str)
{
    console.log(i);
}

// don't use for of loop in object = (if i reached to first key value pair then i don't know where is the second key value pair in memory so thats why object is not iterable)
// symbol.itterable is not defined for object
let obj={
    name:"ravi",
    age:20,
    gender:"female"
}

// TypeError: obj is not iterable

// for(let i of obj)
// {
//     console.log(i);
// }



// how to iterate over object

for(let i of Object.keys(obj))    // object.keys() = returning the object in the form of array
{
    console.log(i);
}


// other method to iterate over array
// arr.foreach expecting call back function as an argument

// for each can't return anything and it can't store value in result
let arr2=[10,20,30,40,50];

// single argument: only value pass 
// two argument: value , index pass
// three argument: value , index ,arr pass
arr2.forEach(function(num){
    console.log(num);
})

// arr2.forEach(callback function)
arr2.forEach((num,index,arr)=>{
    arr[index]=num*2;
    console.log(arr[index])})
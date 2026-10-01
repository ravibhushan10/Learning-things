// create object

// array and object same in terms of implementation

const obj={
    name:"ravi",
    age:20,
    gender:"male"
}
// all name,age,gender are string not a variable

console.log(obj);
// two way to access the value of object
console.log(obj.gender);
console.log(obj["gender"]); //here use only string 




// in the backend key is always stored in the form of string
const insta={
   " insta_id" :"@ravi54321",
    password:"12345"
}

console.log(typeof insta);  //object
console.log(insta.password);



// if key=number
const obj2={
     0:20,
     1:30,
     2:40,
     3:50
}
// console.log(obj2.0);  we cant use in that way 
console.log(obj2['0']);
console.log(obj2[0]);
console.log(obj2[1]); //it is accessing like array
console.log(obj2[2]);


// it looks like array and array is also stored in the form of key and value so the type of array is object
// so the object and array are stored in memory in same way like key : value


// why length have no parenthesis() in array 
// because lenght is not a function it is a key of a object and accessing the key we don't provide the parenthesis
// in js map is a collection of key value pairs where both keys and data can be any data type(function ,object, primitive data)
// map maintain the order of insertion
// key should be unique


const map1=new Map();
console.log(typeof map1);   // object

map1.set(9,90);
map1.set("name","ravi");
map1.set(20,"mohan");
map1.set("sohan",50);
map1.set("sohan",500); //  when you try to add same key in map then it update the value(second key:value pair will be inserted first one is removed) 


// delete
map1.delete(9);    //here give the only key for deletion

// check the key is present or not
 console.log( map1.has("name"));     // give only  key (result true or false)


//  size
console.log(map1.size);
console.log(map1);


// second way to create map = 2D array
const map2=new Map([  [4,"ravi"],  ["name","ravibhushan"],  ["balance",400] ,[90,90000]]);


// iterate over map
for(let [key,value] of map2)
{
    console.log(key,value);
}
console.log(map2);


//object :
// Keys: string or symbol

// Map :
// Keys : anything (function,object,primitive data type)



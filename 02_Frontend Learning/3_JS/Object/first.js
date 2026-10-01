const obj={
    a:1,
    b:2
}
// shallow copy =it copy by reference 
// only one copy exist (in heap) the address of both obj and obj2 pointed to same location
// the change made in obj2  reflected to obj

const obj2=obj;
obj2.a=10;
console.log(obj2,obj); 


// deep copy = Two copy exist in heap the address of both object is different so change in any object not reflected to another object

const obj3=structuredClone(obj);
obj3.a=100;
console.log(obj3,obj); 
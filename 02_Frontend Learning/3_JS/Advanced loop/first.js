const obj={
    name:"rohan",
    age:23,
    gender:"male",
    city:"muzaffarpur"
};

console.log(obj.name);
console.log(obj["name"]);

// not a feasible method to access all key and values in  the form of array
console.log(Object.keys(obj));
console.log(Object.values(obj));



// for in loop = itterating over keys in an object
//syntax for(variable  variable_name  in  object_name)
for(let key in obj)
{
    console.log(key,obj[key]);
}


// prototyping of upper object so obj2 access the all properties of obj
const obj2=Object.create(obj);
obj2.money=3223;
obj2.id=21;

console.log(obj2);
console.log(obj2.name);

console.log(Object.keys(obj2));   /* [ 'money', 'id' ]  for this method it access only own keys */

for(let i in obj2)
{
    console.log(i,obj2[i]);      /*  This access all inherited keys also of upper */
}



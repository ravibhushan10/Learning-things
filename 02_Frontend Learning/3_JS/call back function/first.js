const user={
    name:"ravibhushan",
    age:200,
}
console.log(Object.getOwnPropertyDescriptors(user,"name"));
Object.defineProperty(user,'name',{
    writable:false,
})
// it is don't use the save from the attackers 
// it is use to save the accidential changes in your code for this property
console.log(Object.getOwnPropertyDescriptors(user,"name"));

user.name="mohit";
console.log(user);



// concept of enumerable = by default true in simple case ({root}Object.prototype ,false)


let customer={
    name:"ravi",
    age:23,
    balance:5000,
    account_number:87674534,
}
 
Object.defineProperty(customer,'name',{enumerable:false})

// jiska bhi key ka enumerable true hoga un sabko access(print) karega 
// even inherit hoke bhi koi key aata hai , uska enumerable true huaa to oo bhi print hoga

// by default Object.prototype ,ka, enumerable: false hota hai 
// thats why when you print normal for in loop with one object then tostring ..... key not  show you 

//  but when you use the two object and inherit and then use for loop then show all because enumerable is true for chain but not the root(object.prototype)
for(let key in customer)
    console.log(key);




// but you can change the enumerable as a true for particular key in object.prototype

Object.defineProperty(Object.prototype,'tostring',{enumerable:true})
for(let key in customer)
{
    console.log(key, customer[key]);
}
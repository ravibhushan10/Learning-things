let obj={

}
obj.name="rohit";
//  key : value , writable enumerable configurable
console.log(Object.getOwnPropertyDescriptors(obj));
// output of this code
/*
 name: {
    value: 'rohit',
    writable: true,
    enumerable: true,
    configurable: true
  }
 */   
// by default all true

// writable = true,  key ka jo value hai us value ko change kar sakte ho
// obj.name="mohit";  
// If true, the value can be changed.
// If false, assignment won’t work.



// configurable = true ,  To aap writable and enumarable ki value ko change kar sakte ho ( true to false and false to true) 
// If true, the property can be deleted or its attributes modified.
// If false, it cannot be redefined or removed.


const obj2={

}
//Object.defineProperty(object, propertyName, descriptorObject);
// define takes only three argument
Object.defineProperty (obj2,'name',{
   value:"ravi",
   writable:false,
   enumerable: true,
   configurable:false,
})
console.log(obj2);
obj2.name="rohitte";
console.log(obj2);


// where is it used == it is used for sensitive data to protect them for midifying

let customer={
    name:"ravi",
    balance:5000,
    account_number:87674534,
}

Object.defineProperty(customer,'name',{
    writable:false,
    
})
Object.defineProperty(customer,'account_number',{writable:false})
   
   

customer.name="lokesh";
customer.account_number=98097807908077;
console.log(customer.name);
console.log(customer.account_number);
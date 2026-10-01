//Destructuring the nested object
// inside the object you can use anything like array,object and function
const user={
    name:"ravi",     
    balance:420,
    arr:[10,20,30,40],
    greet:function(){
        console.log("hello everyone");
    },
    meet:function(){
        return 100;
    },
    address:{
        pincode:84321,    
        city:"muzaffarpur"
    }
}


// // first method
// const {address:adds}=user;
// const {pincode}=adds;
// console.log(pincode);

// second method
const {address:{pincode,city}}=user;
console.log(pincode,city);

const{arr:[first]}=user;
console.log(first);

user.greet();
console.log(user.meet());



const {sum,product}=require("./math")

console.log(sum(1,2,3));
console.log(product(1,2,3));



// like this module={
//     // some property
//     exprots{
//         //some property
//     }
// }

const user={
    name:"Ravi Bhushan",
    age:22,
    address:{
        city:"Muzaffarpur",
        state:"Bihar"
    },
    hobbies:["sleeping","coding","youtube"]
};

let address=user.address;
// exports=module.exports;


address.pincode=43433;
address.country="India";

console.log(user);
function sum(...nums){
    return nums.reduce((curr,acc)=>curr+acc);
}
function product(...nums){
    return nums.reduce((curr,acc)=>curr*acc);
}

// module.exports=[
//     sum,
//     product
// ]

// because its is a empty object so 
// module.exports.sum=sum;
// module.exports.product=product;

module.exports={
    sum,
    product
}
console.log(module.exports);
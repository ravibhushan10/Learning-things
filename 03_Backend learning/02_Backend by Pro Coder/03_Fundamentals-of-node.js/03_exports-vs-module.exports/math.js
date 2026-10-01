function sum(...nums){
    return nums.reduce((curr,acc)=>curr+acc);
}
function product(...nums){
    return nums.reduce((curr,acc)=>curr*acc);
}


console.log(module.exports===exports);   //true

module.exports={
    sum,
    product
}
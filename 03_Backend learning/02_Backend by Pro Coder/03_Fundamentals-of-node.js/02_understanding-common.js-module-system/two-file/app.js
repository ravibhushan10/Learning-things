// const math=require("./math")
// here math is a object because module.exports assing with object

// // Another option is destructure of the array
// const [sum,product]=require("./math")


// Another option is destructure of the object
const {sum,product}=require("./math")

// const sum=math.sum;
// const product=math.product;


// Another option is destructure of the object
// const {sum,product}=math;


console.log(sum(3,4,4));
console.log(product(3,4,4));


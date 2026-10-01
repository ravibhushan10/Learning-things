// when you write ./math.js -> this is called a module
// when you write 'math' -> this is called a package


const {num} =require('math')
// First method
// Here this is become the "math"  npm package ..
// To do that firstly create the node_modules folder in put the math.js
// and use only require('math') -> it working only with the cjs module system



console.log(num);

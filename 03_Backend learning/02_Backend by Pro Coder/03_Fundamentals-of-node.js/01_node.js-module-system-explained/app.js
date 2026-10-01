var a=34; 
// in browser its present in the global scope , but when we run with node.js debugger then it present in local scope
console.log(a);

global.num=34;  //This will present in global scope in node.js 
console.log(num);

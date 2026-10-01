import fs from 'node:fs/promises'
// import fs from 'node:fs'  -> both are same because this is a native(core) module of node.js


// console.log(fs);

// const contentBuffer = fs.readFileSync('./index.html');  // return the buffer
// const content2 = fs.readFileSync('./index.html',"utf-8");  // return the string

// const content=contentBuffer.toString();
// console.log(contentBuffer);
// console.dir(contentBuffer);


fs.readFile('./index.html',(err,data)=>{
   console.log(data.toString());
});  // this function return nothing

console.log('end');

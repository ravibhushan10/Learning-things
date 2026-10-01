import fs from 'node:fs/promises'
// import fs from 'node:fs'

console.time();
let a=0;
const timerId=setInterval(() => {
    console.log(a++);
    if(a===30)
    {
        clearInterval(timerId);
        console.timeEnd();

    }
}, 5);

//  both are asynchronous and non-blocking
// // Here if the file is too long then setinterval and end is print and when file read is done then file content is print.
// const content= fs.readFile("./readme.md",()=>{
//     console.log("Reading done");
// });

const content= await fs.readFile("./readme.md");
console.log("reading done");


console.log('end');

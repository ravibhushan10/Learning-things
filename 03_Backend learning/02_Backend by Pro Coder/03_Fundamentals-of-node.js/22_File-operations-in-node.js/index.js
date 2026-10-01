// import { readFile } from 'node:fs';
// import fs from 'node:fs/promises'

import fs from 'fs/promises'
import {watch} from 'fs'

// await fs.rename("notes.md","ravi.md");

// await fs.copyFile("./ravi.png","D:\\ravib\\ravi.png");

// try{
//     await fs.cp("./ravi", "D:\\ravib\\ravi",{recursive:true});
//     console.log("copy done");
// }catch(err){
//     console.log("copy failde" , err.message);
// }


// const stats=await fs.stat("ravi");
// console.log(stats);



// From this you can create the typing speed

watch("notes.md", async (eventType)=>{
   if(eventType==='change')
   {
     console.log( await fs.readFile('notes.md','utf-8'));
   }
});

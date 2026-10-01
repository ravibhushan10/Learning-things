// import { writeFile } from 'node:fs';
import fs from 'node:fs/promises'

// fs.writeFile("lokesh.txt","how are you");
// fs.appendFile("lokesh.txt","\nIm fine bro");

// Read from the desktop and write into a file in vs code
// const content=await fs.readFile("D:\\ravib\\ravi.txt")
// fs.writeFile("lokes.txt",content);


// Read from vs code and write to desktop (This is very wrong method to read and write the file when your file is over 10gb then it not fit in ram so you have to use the stream)
try{
    const img=await fs.readFile('./ravis.png');
    await fs.writeFile("D:\\ravib\\example.png",img);
}catch(err){
    await fs.appendFile("error.log", `\n\n${new Date().toLocaleTimeString()}\n ${err.message}\n  ${err.stack}`);
    console.log(err);
    console.log(`To see the full error go to ./error.log file`);
}




// // in text file our time is dynamic
// setInterval(() => {
//     fs.writeFile("./lokesh.txt",new Date().toLocaleTimeString());

// }, 1000);

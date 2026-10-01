import {readFile} from 'node:fs/promises'

// console.log(process.argv);
const filePath=process.argv[2];

const content=await readFile(filePath,"utf-8");

const wordsArray=(content.split(/[\W]/).filter((w)=>w));

const wordCount={}

wordsArray.forEach((word)=>{
   if(word in wordCount){
       wordCount[word]+=1;
    }else{

        wordCount[word]=1;
   }
})

console.log(wordCount);

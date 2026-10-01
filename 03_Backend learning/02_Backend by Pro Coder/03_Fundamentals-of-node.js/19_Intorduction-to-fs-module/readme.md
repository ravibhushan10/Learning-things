<!-- ******* fs module ********** -->

-> It is very big object that has method and variables.
-> It has the lots of methods .

-> It has two types of method:
   1: normal method (async method)  -> main thread not blocked
   2: sync method   (sync method)   -> main thread blocked

eg:   readFile
      readFilesync

<!-- ************ Read the file *********** -->

<!-- ****** -->
import fs from 'node:fs'  -> using this

-> it takes the two argument (don't use this method it is too slow)
1: readFilesync("path", "chracter-encoding-formate") ->return string
1: readFilesync("path") ->return buffer

-> it takes two argument (you can use this method)
2: readFile("path", "callback");
2: readFile("path");

<!-- ******* -->
import fs from 'node:fs/promises'  -> using this (Best method)

->
const content=await fs.readFile("./index.html");
console.log(content.toString());

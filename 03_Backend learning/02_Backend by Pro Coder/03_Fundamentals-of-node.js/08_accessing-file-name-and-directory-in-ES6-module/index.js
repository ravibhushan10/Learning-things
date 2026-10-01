import {num} from "./math.js"

console.log(import.meta);
// this import.meta whole is a object. It has dirname , filename,resolve,url properties.In node.js

// but in browser it has only 2 properties url, resolve.
const {filename,dirname,url}=import.meta;
console.log(filename);
console.log(dirname);


// In node.js it uses the FTP(file transfer portocol)
// url: 'file:///D:/ravib/Learning/02_Learning/Pro%20Coder/02_Backend/04_Fundamentals-of-node.js
// /08_accessing-file-name-and-directory-in-ES6-module/math.js'


// but in browser it uses the HTTP
// http://127.0.0.1:5500/08_accessing-file-name-and-directory-in-ES6-module/math.js

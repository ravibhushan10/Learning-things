"use strict";
// Every  JS code run in TS 
// But every TS code not run in JS
// tsc first.ts : its compile in older version of js (ES1)
// so you have to tell the which version you want to compile
let a = 20;
console.log(a);
// a="ravi";  //here during writing time you will get error suppose you are using 'a' after 200 lines then this line show you error 
// But if you run this error line code in ts then it show the error but crrosponding to this generate js file because in js file this is not an error so it convert in js(chahe error hi Q na ho)

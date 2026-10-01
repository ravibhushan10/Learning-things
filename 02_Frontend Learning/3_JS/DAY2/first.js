"use strict"

// declare variable

let arr=20.8;
console.log(arr);
// primitive data types
//  number,string,boolean,symbol,null,undefind,bigint

let account_balance=324342;
console.log(typeof account_balance);
// you can assign any type of data in one variable
account_balance="ravi";
console.log(typeof account_balance);

let str="hello ravi";
console.log( str);

// you can use single quotes to print string
let str1='ravi is a bad boy he doesnt know how to use instagram';
// to print anything it is not neccessary to add (;) semicolon because compiler automatic add the semicolon at the end
console.log(str1);
 
// Boolean = it will be true or false
let papa_ko_block_kar_rakha_hai=true;
console.log( papa_ko_block_kar_rakha_hai);

// undefind = if you not assign any type of value is called undefind
let account3;
console.log(typeof account3);
account3=34;
console.log(typeof account3);

// null  

let balance=null;
console.log( balance);
// this is big error 
console.log(typeof balance);

// bigint
let a=3487092407893430874320102; /* it starts the wrap the big number into number data type 
because a number data type contain 64-bit binary number only
*/
console.log(typeof a);

let b=48930347838790287010781n;
console.log(b);

// maximum and minimum integer
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);






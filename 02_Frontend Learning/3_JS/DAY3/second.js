// type conversion into number

let account_balance="1000";
let num=Number(account_balance);
console.log(typeof num);
console.log(typeof account_balance);

// convert boolean to number

let x=true;
console.log(typeof Number( x));

let account="234xes";
// it is not a number so it is not converted into the number
console.log(Number(account)); 

// null

let y=null;
// null=0 when conversion
console.log(Number(y));

// undefind

let z;
// undefind=nan when we do conversion
console.log(Number(z));
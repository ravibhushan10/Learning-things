
const a= /hi/     //Regex
const b= /hi/gi     //Regex(with flags)
console.log(a);
console.log(typeof a);   //object
console.dir(a);          //object with expand in browser



// There are two way to create the Regex/array/object

// 1:Literals
const regexLiterals=/ravi/
const arrLiterals=[]
const objLiterals={}

// 2:using the constructor (new)
const regex2=new RegExp();
console.log(regex2);   //  /(?:)/ -> empty regex pattern
console.dir(regex2);

const regex3=new RegExp("ravi","g");
console.log(regex3);   //  /ravi/ -> regex pattern
console.dir(regex3);

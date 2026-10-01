let num1=32;
let num2=new Number (32);
let num3=new Number (32);
console.log(num1);
console.log(num2);
console.log(typeof num2);  //object


console.log(num1==num2); //true
console.log(num2==num3);  //false

let num=323.5342432;
console.log(num.toFixed(5));
console.log(num.toPrecision(2));  //3.2e+2
console.log(num.toExponential(2));
console.log(num.toString());
console.log(num.valueOf());
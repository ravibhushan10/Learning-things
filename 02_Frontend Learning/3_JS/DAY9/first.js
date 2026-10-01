const d=new Date();
// this time is equal to GMT time standard
console.log(d); //2025-04-06T15:48:18.853Z
console.log(d.toDateString()); //Sun Apr 06 2025
console.log(d.toString());  //Sun Apr 06 2025 21:25:37 GMT+0530 (India Standard Time)
console.log(d.toISOString());

console.log(typeof d);  //object


// jan : 1: 1970 : 12:00:00 night se calculate karta h in milisecond
// it always gives the value in millisecond then  converted into date formate

const date=new Date(2000);
console.log(date);  //1970-01-01T00:00:02.000Z

const ravi=new Date(3434343432423);
console.log(ravi);  //2078-10-30T08:17:12.423Z


// work on get date

const D =new Date();
console.log(D.getDate()); 
// sun , mon, tue,wed,thu,fri,sat
// 0     1     2   3   4   5   6
// jan , feb,marc,april,.......... dec
// 0      1    2    3  ........... 11
console.log(D.getDay()); 
console.log(D.getMonth());
console.log(D.getFullYear());
console.log(D.getMinutes());
console.log(D.getSeconds());
console.log(D.getMilliseconds());
// get date in milliseconds
console.log(D.getTime());



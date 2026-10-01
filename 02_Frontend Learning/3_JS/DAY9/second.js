// first way
const d=new Date();
console.log(d.getTime());

// second way
const ravi=Date.now();
console.log(ravi);


// third way

// string = it calculated   1 base indexing (month ,day)
const da=new Date("2025-04-06");  //2025-04-06T00:00:00.000Z
const das=new Date("2025-04-06T05:30:10"); 
// you can set the date manually
console.log(da.toString());
console.log(das);


// number=  it calculated form  0 base indexing (month ,day)
const day=new Date(2025,3,5);
console.log(day.toString());


// seting date components
const day1=new Date();
day1.setFullYear(2025);
day1.setMonth(2);  // it show march because 0 base indexing
day1.setDate(2);  
console.log(day1.toString());
console.log(day1.toLocaleDateString());
console.log(day1.toLocaleTimeString());


// calculation of date

const date1=new Date();
const date2=new Date("2025-04-06");
console.log(date1-date2);
//difference between date gives in millisecond
console.log(date1>date2);
console.log(date1<date2);


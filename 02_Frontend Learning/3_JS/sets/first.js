const result=new Set([10,20,30,40,10,30]); //here last 10,30 not added into set because set only add unique value 

// use case : storing mobil No, user_name
console.log(result);
console.log(typeof result);    //object

// other way 
const  set1=new Set()
set1.add(10);
set1.add(20);
set1.add(100);
set1.add(1000);

console.log(set1.size);
set1.delete(100);
console.log(set1);

console.log(set1.has(30));  //it check element present or not
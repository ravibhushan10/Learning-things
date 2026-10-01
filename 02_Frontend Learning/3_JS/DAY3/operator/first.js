// comparasion operator

let x=10,y="10";
// type conversion hoga string to number and gives true (10==10)
console.log(x==y);


let z=10,a="20";
// type conversion hoga string to number and gives false (10!=20)
console.log(z==a);

// (=== )  --->  first type check then value check if the both condition is true then result will be true
let ax=10;
let az=10;
let ay="30";
console.log(ax===ay);
console.log(ax===az);

// null only equivalent to undefined
// null==undefined (true)
// null===undefined (false due to type checking)

console.log(null==undefined);
console.log(null===undefined);

// in every condition if you are comparing(==) null or undefined with anything they always gives you false result 
console.log(null==10);

console.log(undefined==10);
console.log(null=="10");
console.log(undefined=="10");
console.log(null==true);

// but for comparing(<,>,<=,>=,!=) firstly do type conversion and then value check
console.log(null>0);
console.log(null<0);
console.log(null>=0);  /* here null converted to num=0 so 0==0 true */
console.log(null<=0);

// undefinded = here firstly type conversion done  and (nan==0) compare for all
console.log(undefined==0);
console.log(undefined<=0);
console.log(undefined>=0);
console.log(undefined<0);
console.log(undefined!=0);
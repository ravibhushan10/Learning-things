const obj1={a:100,b:200};
const obj2={c:300,d:400};


Object.freeze(obj1);
// when object is freeze then we can't add property ,delete and modify its value

obj1.name="ravi";
obj1.a=10;
delete obj1.a;
console.log(obj1);



Object.seal(obj2); 
// but here we can only modify the value but not delete and add 
obj2.name="ravi";
obj2.d=1600;
delete obj2.c;
console.log(obj2);


//check  any object is sealed  or not
 
// the precedence of freeze is higher than seal

console.log(Object.isSealed(obj1));  //true
console.log(Object.isSealed(obj2));  //true


// check any object is freeze or not
console.log(Object.isFrozen(obj1));  //true
console.log(Object.isFrozen(obj2));  //false


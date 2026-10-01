// here we are manipulating the html page by javascript
// Document Object Model =it store the entire html file

//   1: Accessing Element 


// ****************************************************************
//   A: By Class name
const obj=document.getElementsByClassName('header1')[1];
obj.className="mohan";   // here className= HTML wala class (it used because a "class" keyword is already in javascript)
obj.innerHTML="tu kaisa hai bhai";
obj.style.color="green";

//  B: By Id
const obj1=document.getElementById("first");
obj1.style.color="red";





// ****************************************************************
//  C: By CSS Selector


 //  i: Single Element:(by id,class,tag name)

     
const id= document.querySelector('#first');
console.log(id);
id.style.backgroundColor="green";



// if same class name have multiple elements then it return only first matching class name , tag name
const id2= document.querySelector('.header1');
id2.style.backgroundColor="red";
console.log(id2);

const id3= document.querySelector('h2')
id3.style.backgroundColor="blue";
console.log(id3);


//  i: Multiple Element:(by class,tag name)
// it gives you the all elements matching with class tag name

const all=document.querySelectorAll(".header1");
console.log(all);
// select anyone from all
all[0].style.backgroundColor="pink";
console.log(all.length);

for(let i=0;i<all.length;i++)
  console.log(all[0]);


//  How to iterate over Node List
//   1: normal for loop
//   2:  for  of loop
//   2: for each loop
for(let i=0;i<all.length;i++)
  all[i].style.color="red";

for(let val of all)
console.log(val);

all.forEach((val)=>{
    console.log(val);
})


// To convert Object(NodeList) to Array
const ravi=Array.from(all);
// now you can apply all array operation on this 
// in upper(all ) you can't  apply the operation of array because it is looking like array not that is not a array
console.log( ravi);
ravi.pop();
console.log(ravi);


// select by tag name

const obj3=document.querySelectorAll("li");
obj3[3].style.backgroundColor="aqua";
console.log(obj3);


const obj4=document.querySelector("ul li");  //or ul>li
obj4.style.backgroundColor="aqua";
console.log(obj4);
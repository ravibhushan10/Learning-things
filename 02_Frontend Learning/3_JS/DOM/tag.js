// 1:Select the element by tag name

// it gives you collection of HTML(it is iteratable) 
// you can't directly apply and css on that you have to target the particular element

// use normal for loop

const obj=document.getElementsByTagName("li");
obj[2].style.backgroundColor="red";

for(let i=0;i<obj.length;i++)
   obj[i].style.color="green";

for(let val of obj)
    console.log(val);

// for each loop
const team=Array.from(obj);
team.forEach((val)=>{
    console.log(val);
})
// ***********************************************

// 2: Accessing using Relationship

// (a) : Parent Node:

const list=document.querySelector('li');
console.log(list);
console.log(list.parentElement); 
console.log(list.parentNode); 


// (b)Child Nodes
const car=document.querySelector('ol');
console.log(car);
// it gives you HTML element and and text node


console.log(car.children);  //HTML Collection 
console.log(car.firstElementChild); //li
console.log(car.lastElementChild); //li
console.log(car.nextElementSibling);// h4
console.log(car.previousElementSibling);// h3


console.log(car.childNodes); //NodeList
console.log(car.firstChild);  // text
console.log(car.lastChild);   //text
console.log(car.nextSibling); //text
console.log(car.previousSibling); //next



// Difference between html collection and nodelist

// HTML Collection = it return only  Element nodes(tags)
// NodeList = it return both  Element nodes(tags), comment node(text node ,space node)



// What is the difference between :
// innerHTML
// innerText
// textContent


// innerHTML gives you all tags and content present inside the tag(h1)
const obj1=document.getElementById('ravi').innerHTML;
console.log(obj1);


// when you apply display none : it shows you all content of all present element inside it
const obj2=document.getElementById('ravi').textContent;
console.log(obj2);

// When you display none: it shows you only screen content that is vissible in website
const obj3=document.getElementById('ravi').innerText;
console.log(obj3);
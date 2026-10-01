// ************************ Create text Node ************************************

// what is text Node= a node without tag is called text node(space,nextline,comment,normal text)


const element=document.createTextNode("hello ji");
const par=document.getElementById("root");
par.appendChild(element);


// *********************** Create Attribute Node(class,id ) **********************

const element2=document.createAttribute("id");
element2.value="first";

// // access to first list of file
// const current=document.querySelectorAll('li');
// current.setAttributeNode(element2);

// access to second list
const curr=document.getElementById('root');
console.log(curr.children);
curr.children[1].setAttributeNode(element2);







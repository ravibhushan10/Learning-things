// ************** Add Node to DOM *******************

const parent=document.getElementById('root');

const element=document.createElement('li');
element.textContent="Abhishek";


// to attach first in list
parent.prepend(element);

// to attach last in list
parent.appendChild(element);    //to insert one node at a time


// inserBefore(newnode,  refrence node)
// on a specific position = firstly take the access of nearest node 
const child=parent.children[1];
parent.insertBefore(element,child);


// replaceChild(newelement , oldelement)
parent.replaceChild(element,child);



// **************** Add node ot Adjacent ********************

// insertAdjacenElement("place",new node);

// beforbegin: Before the element it self
// afterend : after the element itself
// afterbegin: Inside the element, before its first child
// beforeend: Inside the element ,after its last child

const element2=document.createElement('div');
element2.textContent="Hello Ravi";

// parent.insertAdjacentElement('beforebegin',element2);
// parent.insertAdjacentElement('afterend',element2);
// parent.insertAdjacentElement('afterbegin',element2);
parent.insertAdjacentElement('beforeend',element2);


// ***************** Delete Node or element ******************

// .remove() = works for only one element (not a HTML collection)
const par=document.getElementsByTagName('li')[3];
par.remove();


// how to create an element in javascript


// <li>TS</li>

// 1: Created an element

const element=document.createElement('li');
element.textContent="TS";

// after creating you have to attached to DOM
// for attaching get the access of parent (where you want to attach)

const par=document.getElementById("root");
par.append(element);





// if you want to attach multiple element the use function
function attach(content){
    
    const element=document.createElement('li');
    element.textContent=content;
    
    const par=document.getElementById("root");
    par.appendChild(element);
}
attach("Node js");



// Best way to create and attach element in anywhere
function attachwithtag_selector(tagName, content, targetSelector) {
    const element = document.createElement(tagName);
    element.textContent = content;

    // Allow selecting by ID, class, or tag using querySelector
    const parent = document.querySelector(targetSelector);

    if (parent) {
        parent.appendChild(element);
    } else {
        console.error(`No element found for selector: ${targetSelector}`);
    }
}
attachwithtag_selector('h2',"this is h2 heading", '#bodyid');
attachwithtag_selector('li',"React", '#root');
attachwithtag_selector('li',"Node.Js", '#root');



// // Difference  between append() and appendChild()
// 1: append()           // here you send multiple argument
// 1: appendChild()     // here you send only one argument





   
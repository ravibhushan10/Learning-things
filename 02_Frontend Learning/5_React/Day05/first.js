import React from "react";
import ReactDOM from "react-dom/client";

const element =<h1>Hello Coder Army</h1>

// In JSX you only write the expression ({name}, {obj.name}, array)
// But not the statement like "let x=23  , and also entire object " ;

// Expression means (Output laake de: result produce kare)


const arr=[12,23,"ravi","&"];

// Greet function have own props(i.e. is a object)
// it takes all agrument and wrap up into the object

const porps={
   name:"ravi",
   age:"23"
}


// React component
function Greet(props){
    return(
     <>
    <h1>Ram Ram Bhaiya Jii {porps.name} {props.age}</h1>
    <h2>This is array:{arr}</h2>
    </>

    );
        
}

// const element2=greet();
const element2= <Greet/>

// **************** Why Capital first letter ****************

// This is all rule of JSX not the react

// When you want to call function in JSX then your function first letter shuld be capital
// React treats this as <greet> HTML element → will not render correctly

// Capital first letter → JSX treats it as  React component
// Lowercase first letter → JSX treats it as HTML tag

// How JSX differentiate the normal html tags(h1,div,span)  and user-defined tags . That's why the concept of first letter capital


// ******* How to pass argument *********

// Id and className is the argument of h1
const ele=<h1 id="first" className="header">Hello</h1>
const ele2=<Greet name="ravi" age="23"/>

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(ele2);
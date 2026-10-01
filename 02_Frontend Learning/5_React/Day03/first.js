
import React from "react";
import ReactDOM from "react-dom/client";





// const newelement= <h1>Hello ravi bhia ki hal ba</h1>

// const Reactroot=ReactDOM.createRoot(document.getElementById('root'));
// Reactroot.render(newelement);




// **************************************************************
// JSX: javascript XML : HTML code write in JS file 
// JSX is not a part of react

// Tools like "Babel" convert JSX into React.createElement() calls. then it converted into the DOM
// Bable is already in node_module folder(inside vite, parcel)

//  Babel(transpiler)              React                     Render
//       JSX => React.creatElement() => react element(JS Obj) => HTML element


// JSX is not a HTML 
// 1: class in html ,, className in JSX


// ***************************************************************



// // it expect only single element(div)

// const newelement= (

//     <div>
//         <h1>Hello ravi bhia ki hal ba</h1>
//         <h2>hello lokesh bhia</h2>  
//     </div>

// )

// *************************************************


// // But i don't want extra div use::React Fragment 
// const newelement= (

//     <>
//         <h1 id="second">Hello ravi bhia </h1>
//         <h2 className="first">hello lokesh</h2> 

//     </>

// )

// **************************************************


// Add JS expression in JSX
const name = "ravi";
const obj = {
   name: "ravi",
   age: "20"
}

const obj2={
   backgroundColor:"red",
   fontSize:"23px",
   color:"pink"
}

// Here e1 is a react element 
// Because JSX at the end return an react element
const e1 = (
   <>
      {/* {} means you are using javascript in jsx */}
      <h4 id="first">Hello {name}</h4>
      <h5 id="second">Your age is:{obj.age}</h5>

      {/* Here you can add your own custom attributes, even with attributes value is variable*/}
      <h6 money="23" id="third"> Youer money is:</h6>
      <p honey={obj.age}>bhai tu kaisa hai teri hal khabar</p>
      

      {/* even use css : style attributes needs a object */}
      <p style={obj2}>bhai tu kaisa hai teri hal khabar</p>
      <p style={{backgroundColor:"blue",fontSize:"23px",color:"pink"}}>Hello Warish Chesam</p>

   </>
)

// ************************** React Component  ***********************
/* React component has two types
1: Class based Component
2: Function based Component
*/


function greet(){
   return <h1>Hello bhai kaise ho bhai</h1>
}

const meet=()=>{
   return <h2>Hello meet</h2>
}

const functioncomponent=greet();
const functioncomponent2=meet();

const newelement4=<> {functioncomponent} {functioncomponent2}</>



const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// Reactroot.render(functioncomponent2);
Reactroot.render(meet());
Reactroot.render(<> {greet()} {meet()}</>);
Reactroot.render(newelement4);




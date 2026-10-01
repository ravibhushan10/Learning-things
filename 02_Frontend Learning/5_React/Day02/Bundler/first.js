
import React from "react";
import ReactDOM from "react-dom/client";

// This import and export not a part of old javascript its included after ES6 to import and export the  file

// So this file is not a normal javascript file it's a module file

// ***********************************************************************

// const element=React.createElement('h1',{id:"header",className:"rahul",style:{backgroundColor:"red",fontSize: "30 px", color:"white"}},'Hello Ravi');

// const element2=React.createElement('h2',{id:"header1",className:"rahul",style:{backgroundColor:"blue",fontSize: "30 px", color:"white"}},'Hello lokesh bhai');



// const Reactroot=ReactDOM.createRoot(document.getElementById('root'));
// // Rendring : at a time you can render only one element in particular div
// Reactroot.render(element);
// Reactroot.render(element2);   //React work: it clean the all previous child of div and add new data 

// ******************************************************************************************************

// To add multiple element firstly create a div and add all element to that div and then render entire div in one time


const element=React.createElement('h1',{id:"header",className:"rahul",style:{backgroundColor:"red",fontSize: "30 px", color:"white"}},'Hello Ravi');

const element2=React.createElement('h2',{id:"header1",className:"rahul",style:{backgroundColor:"blue",fontSize: "30 px", color:"white"}},'Hello lokesh bhai');

//To add multiple child in one div use array
const div1=React.createElement('div',{},[element,element2]);

// {/* <div>
//     <h1>Hello ravi</h1>
//     <p>Hello lokesh</p>
// </div> */}

const Reactroot=ReactDOM.createRoot(document.getElementById('root'));
Reactroot.render(div1);


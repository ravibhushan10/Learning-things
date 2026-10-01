import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Card from "./component/Card";
import Footer from "./component/Footer";
import Header from "./component/Header";
import arr from "./utils/dummy"
import {greet as goa, meet as roa} from "./utils/dummy"


// React says when value is change then i will manipulate the DOM and show its value in UI  otherwise it remain same

function App(){

  let [A , setA] = useState(arr);

  function sortArray(){
    A.sort((a,b)=> a.price-b.price);
    // setA(A); it is wrong here value of A does not change because in stack only address store of array so you have to create the clone of this array so it change by its refrence and setcount() will execute
    setA([...A]);
    // console.log(A);
  }

  function priceAbove499(){
    const B = arr.filter((value)=>value.price>499);
    setA(B);
  }
  function priceabove(){
    const C = arr.filter((value)=>value.price>1000);
    setA(C);
  }


  return(<>
    <Header/>
    <button onClick={sortArray}>Sort by Price</button>
    <button onClick={priceAbove499}>Price above 499</button>
    <button onClick={priceabove}>Price above 1000</button>
   
    <div className="middle" style={{display:"flex", gap:"10px" , flexWrap:"wrap"}}>
        {
         A.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.Offer} price={value.price}/>)   
        }
       
    </div>
    <Footer/>
    </>
  )
}




const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);

import React, { useState, useMemo, useCallback, useEffect } from "react";
import ReactDOM from "react-dom/client"
import Second from "./second";
import GlobalContext from "./Global";
import Fifth from "./fifth";



function App(){
  // [stateValue, stateUpdaterFunction]
     //[read only, update function]
  const [count,setCount] = useState(10);
  // useState returns the array and you have to destructure like this-> const [count,setCount]
  console.log(GlobalContext);

  return (
    <>
    <Fifth></Fifth>  
                         {/* as an object fill */}
    {/* provide the data */}
    <GlobalContext.Provider value={{count,setCount}}>   
    <h1>Hello Coder Army {count}</h1>
    <Second />
    </GlobalContext.Provider>
    </>
  )
}


// First create a Create Context
// Provid data ko uske andar: Descendent
// Consume the context





ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);



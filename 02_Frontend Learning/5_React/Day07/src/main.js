import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Colorful from "./Component/Colorful";

// Background color changer
// color = black
// re-render: Call the function again
// setColor("red")
//  useEffect


// setCount(3)

function Main(){
   
    const [count,setCount] = useState(0);

   return (
    <>
      <div className="counter">
      <h1>Counter is: {count}</h1>
      <button onClick={()=>{setCount(count+1)}} style={{backgroundColor:"red"}}>Increment</button>
      </div>
      

      <Colorful name={count}></Colorful>

      {/* here this function call executed and its all code runs when counter increament then Main component re-render again 
      
      Why dom manipulation insturction should wirte in the use effect??
      -> Here colorfull function call if not written this line in use effect 
      document.body.style.backgroundColor = color;\
      Then this line change the color without acutal color of change due to parent change 

      so don't wirte the dom manipulation lines in openly put it in the useeffect()

      But here you save only the execution of useEffect but all remaining code of function is executed.  

      To save entire function to execute use memo()  Hook..
       export default React.memo(Colorful);
       After that colorful function is not call when main component re-render again.


       But when you pass the props(argument to colorfull) 
        <Colorful name={count}></Colorful>
       Then it bypass use memo() and colorfull function execute
       */}

   </>
   ) 


}




ReactDOM.createRoot(document.getElementById('root')).render(<Main></Main>);
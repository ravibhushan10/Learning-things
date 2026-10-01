import React , { useState,useEffect } from "react";


// re-render = function ko dubara call kar do 
//           Component ko call kar do dubara
function Colorful({name}){
   
     const [color,setColor] = useState("black");
        
        console.log('render');
        // console.log(name);


        // useEffect(Callback Function, dependency)
        useEffect(()=>{
            console.log("UseEffect Executed");
            document.body.style.backgroundColor = color;
        },[color]);
    
        // console.log("second")
    
       
       
        return (
            <>
              <h2>{name}</h2>
              <h1>Background Color Changer</h1>
              <div className="but">
                <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
                <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
                <button style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
                <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
                <button style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
              </div>
            </>
        )

}

export default React.memo(Colorful);
// Don't use too much memo when your parent not changable too much 
// it adds extra overhead to your project because memo function code execute then your code executed

// So wisely use
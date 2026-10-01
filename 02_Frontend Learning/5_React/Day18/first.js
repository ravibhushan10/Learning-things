import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Add from "./Add";



function App(){ 
     
    const [language, setLanguage] = useState(["TS","JS","Java"])

    function handleClick(){
        setLanguage(["C++",...language]);
    }

    // Light weight : created with the help of react its object is very small in console
    const VDom = <h1>Hello Coder Army</h1>

    // Heavy weight: created with the help of JS its object is very big in console
    const RDom = document.createElement('h1');
    RDom.innerText = "Hello Coder Army";


    console.log(VDom);
    console.dir(RDom);



    

    return(
        <>
        <div style={{display:"flex", justifyContent:"center", gap:"20px" , marginTop:"50px"}}>
            {
                language.map((value,index)=> <Add key={value} value={value}></Add>)
            }
        </div>
        
          <br></br>
          <br></br>
         <div style={{display:"flex", justifyContent:"center"}}>
          <button style={{backgroundColor:"red"}} onClick={handleClick}>Add language</button>
         </div>
        </>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);



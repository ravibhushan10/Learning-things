import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"

// Password: ABDBHJDVB , setPassword("ABDBHJDVB")
// length:19 , setLength(19)
// numberChanged = false , setnumberChanged(true)
// charChanged = true , setcharChanged(true)

function PasswordGenerator(){

   //  password,length.... all create every time
   // setpassword,setlength... create once in initial time and next time it use refrence

   const [Password, setPassword] = useState("");
   const [length ,setLength] = useState(10);
   const [numberChanged, setnumberChanged] = useState(false);
   const [charChanged, setcharChanged] = useState(false);
   
   
// when generatepassword is normal then it every time allocate new memory when it render 

// it is way to use closure property
// useCallback((callback, d[ependencies]))

// When the value of any dependencies is changed then it recreate generatepassword function otherwise it use only its refrence
 
   const generatepassword = useCallback(()=>{

      let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if(numberChanged)
         str+="0123456789"
      if(charChanged)
         str+="+-)(*&^%$#@!~`{}";

      let pass = ""
      
      for(let i=0;i<length;i++){
            pass+= str[Math.floor(Math.random()*str.length)]
      }
      
      setPassword(pass);

   },[length,charChanged,numberChanged]);
   

//  generatepassword();  Here it gives you the infinite loop   it render infinite time because you write in khule me you put in the useeffect
// useEffect call once at last time

useEffect(()=>{
   generatepassword();
},[generatepassword])





   return(
      <>
        <h1>Password is 🔑:{Password}</h1>
        <div className="second">
         <input type="range" min={5} max={50} value={length} onChange={(e)=>setLength(e.target.value)}></input>
         <label>Length({length})</label>

         <input type="checkbox" defaultChecked={numberChanged} onChange={()=>setnumberChanged(!numberChanged)}></input>
         <label>Number</label>

         <input type="checkbox" defaultChecked={charChanged} onChange={()=>setcharChanged(!charChanged)}></input>
         <label>Character</label>
         <button onClick={() =>generatepassword()}>Change password</button>
        </div>
       
         
      </>
   )
}



ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);
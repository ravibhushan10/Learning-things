import React, { useState, useMemo, useCallback, useEffect } from "react";
import ReactDOM from "react-dom/client"


// //Either use useCallback for this or use normal function outside this app function so it not re-render again and again .because this function is a global scope it created only one time
// function Fibbonnaci(n)
// {
//   if(n<=1)
//     return  n;

//   else
//     return Fibbonnaci(n-1)+Fibbonnaci(n-2);
// }


function App(){
  
  const [count,setCount] = useState(0);
  const [number,setNumber] = useState("")
  // const [result,setResult] = useState(null);
  // counter

 
const Fibbonnaci = useCallback((n)=>{
  if(n<=1)
    return n;

  return Fibbonnaci(n-1)+Fibbonnaci(n-2);
}
,[]);
// empty dependencies means it create only one time it not depend to anyone
// otherwise it create again and again 

  const result = useMemo(()=>Fibbonnaci(number),[number]);

  // it render twice one extra render compare to useMemo
  // but in real world we only use the useEffect
  // useEffect(()=>{
  //   setResult(Fibbonnaci(number));
  // },[number]);


  return (
    <>
     <h1>Counter is: {count}</h1>
     <button onClick={()=>setCount(count+1)}>Increment</button>
     <button onClick={()=>setCount(count-1)}>Decrement</button>

     <div>
      <h2>Fibbonnaci number is: {result}</h2>
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
     </div>
    </>
  )
}








ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
import React,{useState} from "react"
import ReactDOM from 'react-dom/client'



function Counter()
{
    // count initialize with 0;   Always use set_variable_name for function name for better readibility
    let [count,setcount]=useState(0);
    
    function increament(){
        count++;         // jab value change hota hai tab hi setcount function chalata hai otherwise ye nahi chalata its the power of react
        setcount(count);         // OR setcount(count+1);
       
      
    }
    function decreament(){
        count--;         
       setcount(count);          // setcount(count-1);
        
    }
    return(
        <div className="first">
        <h1>Count is:{count}</h1>
        <button onClick={increament}>Increament {count}</button>
        <button onClick={decreament}>Decreament {count}</button>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>);
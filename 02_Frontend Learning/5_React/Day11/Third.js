import GlobalContext from "./Global"
import { useContext } from "react"

export default function Third(){
    
        // const data = useContext(GlobalContext);
        
        // consume the context
        const {count,setCount} = useContext(GlobalContext);

    return (
        <>
         <h2>I am printing {count}</h2>
         <button onClick={()=>setCount(count+100)}>Increment</button>
        </>

    )
}
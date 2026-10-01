import { useDispatch, useSelector } from "react-redux"
import { Increment, Decrement, Reset } from "./Slicer1";


export default function Counting(){
    
    // useSelector(hook) used to select the state from the store
    // it gives you whole global state and now your work what you want to used
    const count = useSelector((state)=> state.slice1.count);


    const dispatch = useDispatch();

    console.log(Increment());
    console.log(Decrement());

    return(
        <>
        <h1>Counter is {count}</h1>
        {/* Here not need to tell that Increment function is a part of slic1 or slice2.. 
        Because increment function already stored (type:slice1/increment) when you dispatch then this whole thing goes to store and store identify
        you don't need to write manually it by default attacthed*/}
        <button onClick={()=>dispatch(Increment())}>Increment</button>
        <button onClick={()=>dispatch(Decrement())}>Decrement</button>
        <button onClick={()=>dispatch(Reset())}>Reset</button>
        </>
    )
}
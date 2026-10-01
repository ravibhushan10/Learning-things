array destructure :
const arr=[10,20,30];

const [first,second]=arr;
         10   20


<!-- ************************ state up lifting ****************** -->
Normal data flow(up to down hierachacy) parent to child with the help of argument(props), as a props you can send state variable and statefunction of parent


But when any child has a state and its another sibling want to use then 
we use the concept of state lifting ..we not make these state in own component we just simply tell to common ancestor ki app hi [value,setValue] isko banoo and dono ko pass kar dena

<!-- ***************** useContext ******************************** -->
props drilling :: when you want to send the data from parent to fifth level in hierachy then you have to send 1->2->3->4->5  but 2,3,4 don't need this data but we sending it increase your time and space. and also 2,3,4 render without any reason.

To solve this problem we use a seprate file that contains all value (state and setstate) that every component can use directly with a simple call is called gobal file.Like the "github"

If multiple components need access to the same piece of data, you don’t want to pass it down through props manually.just everyone use to gobal file.

<!-- ***************************************************** -->
const GlobalContext =  createContext("Rohit");

 The createContext API in React accepts one argument, but that argument can be any data structure — usually an object — allowing you to pass multiple values.


<!-- ************************************************************* -->
Both createContext(),useContext() are API 

1 createContext() return an object : 

{
  Provider, // React component to supply the context value
  Consumer  // Optional component for class-based context access
}

2 useContext(): ye global context me se data ko nikalta hai kisi specific file ke liye
<!-- *************************************************************** -->
-> how to fill data in global file??

<GlobalContext.Provider value={{count,setCount}}>
    <h1>Hello Coder Army {count}</h1>      //This global file is accessible only insides wrapped component jo bhahar hai usko nahi
    <Second />
</GlobalContext.Provider>

ye code first.js me hai , globalcontext bolta hai mai tumko count,setcount de raha hu .. ye puri properties first ke sare child, second ke child ke child andar tak sare ke pass accessible hogi    
<!-- ************************************************ -->

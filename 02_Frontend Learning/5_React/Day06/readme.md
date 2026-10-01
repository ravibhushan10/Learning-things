npm init
npm install react
npm install react-dom
npm install -D parcel


 Vanila js means == plain javascript normal without any library and framework

 React says you only focus on UI i will handle the all things of DOM manipulation
 Because you write too much for DOM manipulation i will handle efficiently(optimized way)


<!-- ************************************************************** -->
Component : normal function name but in react this is called component

-> why component first letter is capital :  To the differention of react in normal html tag or component 
                                          <div> Normal html tag
                                          <Div/> It is a component

<!-- ************************************************************-->
props: properties   --> means parameter,argument

They are used to pass data from one component (usually a parent) to another (usually a child).
Think of props as function parameters — they allow you to customize a component when you use it.

<!-- *********************************************************** -->
Hooks: it is a special type of function

useState()    //most usable
useEffect()
useContext()
useRef()
useReducer()
useCallback() useMemo()

<!-- *************************************************************** -->
state: jab bhi data change hota hai then we say state change ho gaya hai

count++;     count ka state change ho gaya hai 

But woo UI me show nahi ho raha hai

This problem solved by Hook 

<!-- ******************************************************** -->
export :
 when you write :: export const add = (a, b) => a + b;
                In one single file multiple export function exist 
                way to import:  import {add} from file_name

 when you write :: export the enitre component 
                export default Card;
                way to import:  import Card from file_name
<!-- ************************************************************-->
Both React and ReactDOM is differnt modules one is brain and another is hand

working:  ->You write React components using JSX and React logic.
          ->React builds a virtual DOM.
          ->ReactDOM takes the virtual DOM and renders it into the real DOM.

React : props, component, hooks,JSX , state, lifecycle
ReactDOM: take the virtul DOM and render to Acutal DOM (dom manipulation)  

<!-- *****************************  useState()  ****************************************** -->
 let count=0;  ->in react the value change in future you don't need to initialize like this it done by hooks like usestate.

 let [count,setcount]=useState(0);

 ->useState return the array with two values 1: 0 count ke andar jayega
                                             2: function return uska name aap kuch bhi rakh sakte ho

-> Work of return function (setcount) :: jab bhi variable ki value change(state change) ho jaye to aap is function ko call kar dena and updated value bhej dana i will handle everything and render to UI ...aao jaha -jaha bhi count variable ko use kiye honge usko render kar dunga
<!-- ************************************************************** -->
Working of setCount() :    
                      -> Whenever this function call it calls the own Component(Counter) and this time useState(1) update value of count goes to usestate and reflected to all variable
                      
                      ->Every time setcount call it calls the own main component(render the main component) and pass updated value
<!-- ***************************************************************** -->
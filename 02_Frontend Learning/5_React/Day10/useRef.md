const money = useRef(0);
it gives you a object : {object:0
                          current:0
                         }
to print the value of money use console.lgo(money.current);

because object stored in heap but it holds the refrence so even function is goes out of call stack it still use the value

useRef not render the function(component)
because only setNumber (usestate function ) has ability to render the component
<!-- *********************************************************** -->

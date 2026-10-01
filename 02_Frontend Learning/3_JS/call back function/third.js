// call back function = when you pass the refrence of  function in argument 

function names(fun){
    console.log("hello i am name");
    fun();
}

function greet(){
    console.log("hello i am call back function");
}

// two way to pass function
names(greet);
names(function greet(){
    console.log("hello i am call back function");
});


// Real world use case

function fetchdata(){
    // bahut sara code
    // work every 5 second fetch the data from the backend
    console.log("i am fetching data");
}

// it takes the value in milli second
setInterval(fetchdata,2000);



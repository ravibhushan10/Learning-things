// We know that JS is a single threaded and synchrounous language(line by line)
// Single Threaded:(one task(one instruction) at a time)

// **************************************************************************
// JS bhaviour:Asynchronous task(Asynchronous wait)
console.log("10");

setTimeout(()=>{          
    console.log("20");
},2000);
console.log("30");

//setTimeout and setInterval are not part of the core JavaScript language thats why they behave like Asynchronous 
// if it is a part of JS then it execute line by line

// It is a part of Web APIs



// ************************************************************************
// Synchronous task
console.log("10");

const timer=Date.now();  //Old time

while(Date.now()-timer<3000)   //Here this is a part of JS part that's why it execute line by line
{
    // wait for 3 second
}
console.log("20");

console.log("30");
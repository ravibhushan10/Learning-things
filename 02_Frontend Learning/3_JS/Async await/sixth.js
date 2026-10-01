function test1(){
    const pr=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("First Promise");
        },3000);
    })
    return pr;
}


function test2(){

    const pr2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Second Promise");
        },3000);
    })
    return pr2;
}


async function greet(params) {
    

    console.log("Hello I greet You");

    const data=await test1();   
    console.log(data);
 
    const data2=await test2();
    console.log(data2);
}

    
greet();
console.log("Hello ravi");
console.log("Hello Lokesh");
console.log("Hello Ranjeet");

// Execution: Firstly exectution start form greet() then "Hello I greet you " print then test1() call which is waiting so execution comes back to main thread when task done of main thread and completed all taks then it goes to tes1 and then normally execute of all task of greet()

// Main thread never stop 

// Output: Hello I greet You
// Hello ravi
// Hello Lokesh
// Hello Ranjeet
// First Promise
// Second Promise


// In call stack all task done one by one if any task say i have to wait then call stack say go outside and wait in microtask/callback queue and our main thread executing task when all task done in call stack then event loop take the task from microtask/callback queue and push it to call stack then exection start of that
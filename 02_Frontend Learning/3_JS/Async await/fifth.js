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

    const data=await test1();   
    console.log(data);
  //both test1,test2 wrapped into the function so without calling them settimeout can't go to webAPI 
//   so both wait for 3 sec
    const data2=await test2();
    console.log(data2);

    
}
greet();




// Async function always return the promise 
// if you not returning anything then it return bydefault "undefined"

async function meet(){

    return "Hello ravi"; //this is also a promise return it make by default in promise
}
meet().then((response)=>{
    console.log(response);
})

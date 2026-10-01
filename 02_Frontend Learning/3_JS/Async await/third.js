const pr=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("First Promise");
    },3000);
})

const pr2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Second Promise");
    },3000);
})

// Code are running parallely because they written in outside  na ki await ki vajah se

// when  you call in await then both resolve in same time that's why they printing at same time
async function greet(params) {

    const data=await pr;   
    console.log(data);
   //Here promise print at same time
    const data2=await pr2;
    console.log(data2);
}
greet();
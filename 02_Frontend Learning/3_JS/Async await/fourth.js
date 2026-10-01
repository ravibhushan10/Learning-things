const pr=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("First Promise");
    },8000);
})

const pr2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Second Promise");
    },3000);
})



// Main difference between noraml promise and async await

pr.then((data)=>{
    console.log(data);
})
// here both are independent which one is resolve first it execute it immediatly
pr2.then((data2)=>{
    console.log(data2);
})



// async function greet(params) {

//     const data=await pr;   
//     console.log(data);
//     //in this case first promise take 8 sec then other execute  second promise.. Even though second promise is firstly resolve from first one
//     const data2=await pr2;
//     console.log(data2);
// }
// greet();
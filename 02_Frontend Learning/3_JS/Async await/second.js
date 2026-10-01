const pr=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello Everyone");
    },3000);
})

// // When pr comes after 5 second then you can consume the promise
// pr.then((response)=>{
//     console.log(response);
// })



// // it made easy writing of code like normal developer
// async function greet() {
//     const data= await pr;  //It stop the execution of  code below it
//     console.log(data);
// }
// greet();




async function greet() {
    const data= await pr;  //Here this is waiting 5 sec for data(is data come or not means-> promise is resolved or rejected)
    console.log(data);

    const data2=await pr;  //But here promise is already resolved so here no need to wait so execute immediately
    console.log(data2);
    
}
greet();
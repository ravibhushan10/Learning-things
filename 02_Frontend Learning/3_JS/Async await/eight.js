function test1(){
    const pr=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("First Promise");
        },8000);
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

// Both task are independent to each other i want to execute both task in parllel
async function greet(params) {
    
    try{
        console.log("Hello i greet you");
        
        //It returns you , jitane value lega utna value return karega in the form of array
    
        // if both task has different differnt waiting time then it firtly takes maximum waiting time then print all
        const [data1,data2]=await Promise.all([test1(),test2()]);   
        console.log(data1);
        console.log(data2);
    }
    catch(error)
    {
        console.log(error);
    }
     

    
}

    
greet();
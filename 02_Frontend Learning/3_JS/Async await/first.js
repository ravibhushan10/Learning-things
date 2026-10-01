const cart=["Pizza","sandwich","coke"];

function placeOrder(cart){
    console.log("Talking with Domino's....");

   const pr= new Promise(function(resolve,reject){
       setTimeout(() => {

          const food_available=true;

          if(food_available)
          {
              console.log("Order placed successfully");
              const order={
                  orderId:231231,
                  food:cart,
                  restaurant:"Domino's",
                  location:"Muzaffarpur"
              }
              resolve(order);
            }

            else{
                reject("Items out of Stock");
            }

       }, 4000);

    })
    
    return pr;
};

function preparingOrder(order){
    console.log("Pizza prepration started....");

    const pr= new Promise(function(resolve,reject){
        const foodmaker_avilable=true;
        setTimeout(()=>{
           if(foodmaker_avilable){

               console.log("Pizza prepration done");
               const foodDetails={
                   token:12,
                   restaurant:order.restaurant,
                   location: order.location
               }
              resolve(foodDetails);
           }

           else{
            reject("Food maker is not Avilable");
           }
    },4000)
    })

    return pr;
};

function pickupOrder(foodDetails)
{
    const pr= new Promise(function(resolve,reject){
    console.log("Reaching restaurent for picking order....");
    setTimeout(() => {
        console.log("Picked up the order by delivery boy");
        const droplocation=foodDetails.location;
        resolve(droplocation);
    }, 4000);

   })
   return pr;
}

function deliverOrder(droplocation){
    console.log("Delivery boy  on the way...");
    setTimeout(()=>{
      console.log("Order Delivered successful");
    },4000)
}



// placeOrder(cart)
// .then(order=>preparingOrder(order))
// .then(foodDetails=>pickupOrder(foodDetails))
// .then(droplocation=>deliverOrder(droplocation))
// .catch(error=>console.log(error));



// This formate is easy as compare to above : but this is not execute in that way becasue the functions is Asynchronous task


// // But this all instruction's execute one by one synchrounous
// const order=placeOrder(cart);
// const foodDetails=preparingOrder(order);
// const droplocation=pickupOrder(foodDetails);
// deliverOrder(droplocation);



// await =jab tak order ke andar value na chali jaye tab tak next line ko execute nahi karna hai

// await means → JavaScript will wait until the Promise resolves or reject.

// You can't use await outside the function you have to put it to inside the async function 

async function greet() {
    
    const order=await placeOrder(cart);
    const foodDetails=await preparingOrder(order);
    const droplocation=await pickupOrder(foodDetails);
    deliverOrder(droplocation);
}

greet();

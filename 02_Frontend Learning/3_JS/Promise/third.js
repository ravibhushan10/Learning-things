// const cart=["Pizza","sandwich","coke"];

// function placeOrder(cart,Callback){
//     console.log("Taking with Domino's....");
//     setTimeout(() => {
//         console.log("Order placed successfully");
//         const order={
//             orderId:231231,
//             food:cart,
//             restaurant:"Domino's",
//             location:"Muzaffarpur"
//         }
//         Callback(order);
//     }, 4000);
    
    
// };

// function preparingOrder(order,callback){
//     console.log("Pizza prepration started....");
//     setTimeout(()=>{
//         console.log("Pizza prepration done");
//         const foodDetails={
//             token:12,
//             restaurant:order.restaurant,
//             location: order.location
//         }
//         callback(foodDetails);
//     },4000)
// };

// function pickupOrder(foodDetails,callback)
// {
//     console.log("Reaching restaurent for picking order");
//     setTimeout(() => {
//         console.log("Picked up the order by delivery boy");
//         const droplocation=foodDetails.location;
//         callback(droplocation);
//     }, 4000);
// }

// function deliverOrder(droplocation){
//     console.log("Delivery boy  on the way...");
//     setTimeout(()=>{
//       console.log("Order Delivered successful");
//     },4000)
// }


// // placeOrder(cart,callback)
// // preparingOrder(order,callback)
// // pickupOrder(foodDetails,callback)
// // deliverOrder(droplocation)


// placeOrder(cart,(order)=>{
//     preparingOrder(order,(foodDetails)=>{
//         pickupOrder(foodDetails,(droplocation)=>{
//             deliverOrder(droplocation);
//         });
//     });
   
// });


// ********************************************************************************************

// Solve callback hell(dependency ) using Promise



// // Syntax to create Promise

// const pr=new Promise(function(resolve,reject){

// })
// return pr;



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

// i want like this 

// placeOrder(cart);
// preparingOrder(order);
// pickupOrder(foodDetails);
// deliverOrder(droplocation);


// Promise chaining(Here there is not dependency) agar oo order dega to main orderprepair karunga and so on....
//this is Async task
placeOrder(cart)
.then(order=>preparingOrder(order))
.then(foodDetails=>pickupOrder(foodDetails))
.then(droplocation=>deliverOrder(droplocation))
.catch(error=>console.log(error));


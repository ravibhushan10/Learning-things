// Callback Hell:



// callback=()=>{
//     preparingOrder();
// }

function placeOrder(Callback){
    console.log("Taking with Domino's....");
    setTimeout(() => {
        console.log("Order placed successfully");
        
        Callback();
    }, 4000);
    
    
};

function preparingOrder(callback){
    console.log("Pizza prepration started....");
    setTimeout(()=>{
        console.log("Pizza prepration done");
        callback();
    },4000)
};

function pickupOrder(callback)
{
    console.log("Reaching restaurent for picking order");
    setTimeout(() => {
        console.log("Picked up the order by delivery boy");
        callback();
    }, 4000);
}

function deliverOrder(){
    console.log("Delivery boy  on the way...");
    setTimeout(()=>{
      console.log("Order Delivered successful");
    },4000)
}




// callback hell(Disadvantage)
// 1: it killed the code readibility(Hard to debugg)
// 2: here dependecy apply next team dependent on previous team
// 3:Here function dependent on previous function
placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder();
        });
    });
   
});

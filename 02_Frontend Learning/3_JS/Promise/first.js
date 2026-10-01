// to get exact weather:
// Go To---> weatherapi.com
// it gives you API path that show weather for a particular place

// ******************************************************************************

// const obj=fetch(`http://api.weatherapi.com/v1/current.json?key=bd50d3b5dac941b2b88182700252609&q=London&aqi=no`)
// // console.log(obj);  //Promise { <pending> } data are not came right now

// // This Obj is a promise
// obj.then((data)=>{
//     console.log(data);
// })


// ******************************************************************************

// promises has three stata: 1:pending, 2:fullfilled , 3:reject 

const Promises=fetch(`http://api.weatherapi.com/v1/current.json?key=bd50d3b5dac941b2b88182700252609&q=London&aqi=no`)

// console.log(obj);   (pending state)

// // when value come from backend then(.then) it execute otherwise it not execute
// Promises.then((response)=>{   //(fullfilled state)
//     console.log(response);
// }).catch((error)=>{   //(rejected state)when backend return any error like(unauthorized acces )
//   console.log(error);
// })

// // .catch() it gives you error like your request not fullfill(you have to pay)


// ******************************************************************************

// json=JavaScript object Notataion

// It is used to store and exchange data between a server and a client.
// API Communication → Most APIs send data in JSON format.





// ************************************ Method- I ******************************************

//  Promises vada karta hai jo tumne request mari hai uska data aa gaya tab bhi bataunga ya nahi bhi aaya tab bhi uska response batunga(result , error)

// Promises.then((response)=>{  
//     // console.log(response);

//     // console.log(response.json());   //Promise { <pending> }
//     const promise2=response.json();
//     promise2.then((data)=>{
//         console.log(data);
//     })
// })

// ************************************ Method- 2 ******************************************

//  Promises vada karta hai jo tumne request mari hai uska data aa gaya tab bhi bataunga ya nahi bhi aaya tab bhi uska response batunga(result , error)


// // Way-I 
// const promise2=Promises.then((response)=>{  
//     return response.json();  //it gives the body part of data
// })

// promise2.then((data)=>{
//    console.log(data);
// })


// // Way-II: Promises chaining
// Promises.then((response)=>{
//    return response.json();
// }).then((data)=>{
//     console.log(data);
// })


// Way-III: Promises chaining(short form)
Promises
.then((response)=>response.json())
.then(data=>console.log(data))

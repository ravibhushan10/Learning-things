// fetch(`http://api.weatherapi.com/v1/current.json?key=bd50d3b5dac941b2b88182700252609&q=London&aqi=no`)
// .then((response)=>response.json())
// .then(data=>console.log(data))


// fetch(`http://api.weatherapi.com/v1/current.json?key=bd50d3b5dac941b2b88182700252609&q=London&aqi=no`)
// .then((response)=>response.json())
// .then(data=>console.log(data)).catch(error=>console.log(error));
// // attach catch only one for everyone



const promise=fetch(`http://api.weatherapi.com/v1/current.json?key=bd50d3b5dac941b2b88182700252609&q=London&aqi=no`)
const promise1=promise.then((response)=>response.json())
const promise2=promise1.then(data=>console.log(data)).catch(error=>console.log(error))



// First Method

// const button=document.querySelector('button');

// button.addEventListener('click',(event)=>{
//    const place =document.getElementById('location').value;
   
//    function update_temp(data){
//         const element=document.getElementById('weatherInfo');
//         element.innerHTML=`Today's Temperature:${data.current.temp_c}`;
//    }

//    const prom=fetch(`http://api.weatherapi.com/v1/current.json?key=bd50d3b5dac941b2b88182700252609&q=${place}&aqi=no`)

//    prom
//    .then((response)=>response.json())
//    .then(data=>update_temp(data));

// })

// *********************************************************
// Second Method

const button=document.querySelector('button');


const element=document.getElementById('weatherInfo');
function update_temp(data){
      const para=document.createElement('p'); 
      para.innerHTML=`Today's Temperature:${data.current.temp_c}`;

      element.appendChild(para);

    }
    
function shwo_weather(data){
    const para=document.createElement('p'); 
     para.innerHTML=`Weather is ${data.current.condition.text}`;
     element.appendChild(para);
}


function show_error(error)
{
    element.innerHTML=`${error}`
}


button.addEventListener('click',(event)=>{
   const place =document.getElementById('location').value;
   
   if(!place)
   {
     element.innerHTML="Please Enter the location";
     return;
   }

   element.innerHTML="";

   const prom=fetch(`http://api.weatherapi.com/v1/current.json?key=bd50d3b5dac941b2b88182700252609&q=${place}&aqi=no`)

   prom
   .then((response)=>response.json())
   .then(data=>{
    
     if(data.error)
     {
        element.innerHTML=`${data.error.message}`;
     }
     else{
        update_temp(data);
        shwo_weather(data);
     }

    }).catch(error=>show_error("Unable to fetch weather. Try again later."));

})
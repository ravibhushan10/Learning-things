// const red=document.getElementById('red');
// const blue=document.getElementById('blue');
// const orange=document.getElementById('orange');
// const green=document.getElementById('green');
// const purple=document.getElementById('purple');


// const body=document.querySelector('body');


// red.addEventListener('click',()=>{
//     body.style.backgroundColor='red';
// });

// blue.addEventListener('click',()=>{
//     body.style.backgroundColor='blue';
// });

// orange.addEventListener('click',()=>{
//     body.style.backgroundColor='orange';
// });

// green.addEventListener('click',()=>{
//     body.style.backgroundColor='green';
// });

// purple.addEventListener('click',()=>{
//     body.style.backgroundColor='purple';
// });

// ************************************* simple optimized *****************************

// This is too much expensive(respect to time and memory) because it takes all inside the foreach loop if you have 100 buttons then all 100 comes to this loop and our program will slow and memory is full
// const body=document.body;
// const buttons=document.querySelectorAll('button');

// buttons.forEach((button)=>{

   //    button.addEventListener('click',()=>{
      
//       body.style.backgroundColor=button.id;
//    },false);
// });



// ************************************* more optimized *****************************

// so optimized version is : use event bubbling and capturing

// this is called event delegation

const body=document.body;
const parent=document.getElementById('root');
parent.addEventListener('click',(event)=>{
   
   console.log(event.target.tagName);
   if(event.target.tagName==='BUTTON')
   {
      body.style.backgroundColor=event.target.id;
   }

},false)



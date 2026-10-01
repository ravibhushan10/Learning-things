document.body.addEventListener('click',(event)=>{

     const circle=document.createElement('div');
     circle.className='circle';
     const words = [ "Dream",  "Code",  "Future",  "Pixel", "Magic", 
  "Explore",  "Energy",  "Cloud",  "Spark",  "Logic",  "Bright", "Vision",  "Create",  "Shift", 
  "Wave",  "Glow",  "Infinity",   "Mind",  "Quest", "Flow"
];

 const index=Math.floor(Math.random()*words.length);

     circle.textContent=words[index];
     
     const x=event.clientX;
     const y=event.clientY;

     circle.style.left=`${x-25}px`;
     circle.style.top=`${y-25}px`;


     const r=Math.floor(Math.random()*255);
     const g=Math.floor(Math.random()*255);
     const b=Math.floor(Math.random()*255);
     circle.style.backgroundColor=`rgb(${r},${g},${b})`;

     document.body.appendChild(circle);
     
     setTimeout(() => {
        circle.remove();
     }, 5000);

});
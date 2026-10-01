const quotes = [
  //  Motivational Quotes
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Push yourself, because no one else is going to do it for you.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The key to success is to start before you are ready. – Marie Forleo",
  "Your limitation—it’s only your imagination.",
  "Don’t stop when you’re tired. Stop when you’re done.",

  //  Wisdom & Life Quotes
  "In the middle of every difficulty lies opportunity. – Albert Einstein",
  "Life is really simple, but we insist on making it complicated. – Confucius",
  "Happiness depends upon ourselves. – Aristotle",
  "Do not let making a living prevent you from making a life. – John Wooden",
  "Turn your wounds into wisdom. – Oprah Winfrey",
  "The biggest adventure you can take is to live the life of your dreams. – Oprah Winfrey",
  "An unexamined life is not worth living. – Socrates",
  "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
  "Doubt kills more dreams than failure ever will. – Suzy Kassem",
  "Live as if you were to die tomorrow. Learn as if you were to live forever. – Mahatma Gandhi",

  //  Success & Hard Work Quotes
  "Opportunities don’t happen, you create them. – Chris Grosser",
  "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
  "I never dreamed about success. I worked for it. – Estée Lauder",
  "Hard work beats talent when talent doesn’t work hard. – Tim Notke",
  "Don’t be busy, be productive.",
  "Fall seven times and stand up eight. – Japanese Proverb",
  "Do something today that your future self will thank you for.",
  "Success only comes to those who dare to attempt.",
  "Diligence is the mother of good luck. – Benjamin Franklin",
  "The secret of getting ahead is getting started. – Mark Twain",

  //  Technology & Innovation Quotes
  "The people who are crazy enough to think they can change the world are the ones who do. – Steve Jobs",
  "Innovation distinguishes between a leader and a follower. – Steve Jobs",
  "Technology is best when it brings people together. – Matt Mullenweg",
  "The science of today is the technology of tomorrow. – Edward Teller",
  "The advance of technology is based on making it fit in so that you don’t really even notice it. – Bill Gates",
  "Any sufficiently advanced technology is indistinguishable from magic. – Arthur C. Clarke",
  "Information is the oil of the 21st century, and analytics is the combustion engine. – Peter Sondergaard",
  "Technology is a useful servant but a dangerous master. – Christian Lous Lange",
  "First solve the problem. Then, write the code. – John Johnson",
  "Programs must be written for people to read, and only incidentally for machines to execute. – Harold Abelson",

  //  General Inspiration
  "Be yourself; everyone else is already taken. – Oscar Wilde",
  "Act as if what you do makes a difference. It does. – William James",
  "Perseverance is not a long race; it is many short races one after the other. – Walter Elliot",
  "Don’t let yesterday take up too much of today. – Will Rogers",
  "It always seems impossible until it’s done. – Nelson Mandela",
  "If you want to lift yourself up, lift up someone else. – Booker T. Washington",
  "Strive not to be a success, but rather to be of value. – Albert Einstein",
  "Do what you can with all you have, wherever you are. – Theodore Roosevelt",
  "A journey of a thousand miles begins with a single step. – Lao Tzu",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar"
];



// function generate_quote(){

//     const text=document.getElementById('quote');
//     const index=Math.floor(Math.random()*quotes.length);
//     text.textContent=quotes[index];
// }
// setInterval(generate_quote,5000);



// const bgColors = [
//   "#FF5733", // Bright Red-Orange
//   "#33FF57", // Bright Green
//   "#3357FF", // Bright Blue
//   "#F1C40F", // Yellow
//   "#9B59B6", // Purple
//   "#1ABC9C", // Teal
//   "#E67E22", // Orange
//   "#2ECC71", // Emerald Green
//   "#3498DB", // Sky Blue
//   "#E74C3C", // Red
//   "#34495E", // Dark Blue Gray
//   "#16A085", // Greenish Teal
//   "#D35400", // Dark Orange
//   "#27AE60", // Deep Green
//   "#2980B9", // Ocean Blue
//   "#8E44AD", // Deep Purple
//   "#2C3E50", // Dark Navy
//   "#F39C12", // Golden Yellow
//   "#7F8C8D", // Gray
//   "#BDC3C7"  // Light Silver
// ];



// function generate(){
    
//     const body=document.getElementById('root');
//      const r=(Math.floor(Math.random()*256));
//      const g=(Math.floor(Math.random()*256));
//      const b=(Math.floor(Math.random()*256));
//     body.style.backgroundColor=`rgb(${r},${g},${b})`;
// }
// setInterval(generate,5000);


// event object atuomatically eventlistner gives you

const button=document.querySelector('#but');
button.addEventListener('click',(event)=>{
    
  console.log(event.target);
  console.log(event.type);
  console.log(event.clientX);  //viewport-left se kitane px par click huaa hai(exact position of mouse)
  console.log(event.clientY);   //viewport-top se kitane px par click huaa hai

  const text=document.getElementById('quote');
  const index=Math.floor(Math.random()*quotes.length);
  text.textContent=quotes[index];
});
  




  


    

// const color=document.querySelector('#color');
// color.addEventListener('click',()=>{

//   //  alert("Button clicked!");   it gives the alert message
//   const body=document.getElementById('root');
//   const r=(Math.floor(Math.random()*256));
//   const g=(Math.floor(Math.random()*256));
//   const b=(Math.floor(Math.random()*256));
//  body.style.backgroundColor=`rgb(${r},${g},${b})`;
// });
    

// when you press any key in keyboard then it change

// keydown=press the key
// keyup= release the key


// document.addEventListener('keyup',()=>{
//   //  alert("Dont press the key!");   //it gives the alert message
//   const body=document.getElementById('root');
//   const r=(Math.floor(Math.random()*256));
//   const g=(Math.floor(Math.random()*256));
//   const b=(Math.floor(Math.random()*256));
//  body.style.backgroundColor=`rgb(${r},${g},${b})`;
// });





// event object = An event object is a special object automatically created by JavaScript whenever an event occurs.

    
document.addEventListener('keydown',(event)=>{
  //  alert("Dont press the key!");   //it gives the alert message

  // console.log(event.key);  //it tell which key you press


  // when you press Enter then color change
  if(event.key=="Enter")
  {
    const body=document.getElementById('root');
    const r=(Math.floor(Math.random()*256));
    const g=(Math.floor(Math.random()*256));
    const b=(Math.floor(Math.random()*256));
   body.style.backgroundColor=`rgb(${r},${g},${b})`;

  }
  console.log(event.target);

});



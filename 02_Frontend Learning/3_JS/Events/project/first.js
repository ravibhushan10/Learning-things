const button=document.querySelector('button');

button.addEventListener('click',()=>{
   
    // Read the data
    const first_number=document.getElementById('first');
    const num1=Number(first_number.value); //data comes in the form of string
    // so firstly convert the string into number

    const second_number=document.getElementById('second');
     const num2=Number(second_number.value); 


     // Show the result

     const result=num1+num2;
     const re=document.getElementById('result');
     re.textContent="The sum is:"+result;

});
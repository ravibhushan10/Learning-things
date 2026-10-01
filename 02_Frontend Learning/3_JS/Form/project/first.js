
// const original_answer=["Sachin Tendulkar","West Indies","Sachin Tendulkar","264","Muttiah Muralitharan"];

// const form=document.querySelector('form');

// If user attempted all question then  it work perfect 

// form.addEventListener('submit',(event)=>{
    
    //     event.preventDefault();
    
    //     const data=new FormData(form);
    
    //     const answer=Array.from(data.values());
    
    //     let result=0;
    //     for(let i=0;i<answer.length;i++)
    //     {
    //         if(answer[i]===original_answer[i])
    //         result++;
    //     }
    
    //     const out=document.getElementById('output');
    //     out.innerText=`Your Score is: ${result}`;
    
    //     document.getElementById('container').append(out);
    
    
    // })
    
    
    // If user attempted all few(less than all ) then  it work perfect 
    const form=document.querySelector('form');

    // answer treat as a object
    const original_answer={q1:"Sachin Tendulkar",q2:"West Indies",q3:"Sachin Tendulkar",q4:"264",q5:"Muttiah Muralitharan"};
    form.addEventListener('submit',(event)=>{
     
    event.preventDefault();

    const data=new FormData(form);
     let result=0;
    for(let [key,value] of data.entries())
    {
       if(value===original_answer[key])
        result++; 
    }
    const out=document.getElementById('output');
    out.innerText=`Your Score is: ${result}`;
})

// we can't write the this logic(answer) in frontend because anyone can see by inspecting the webiste because HTML,CSS,JS all are present in borwser

// That's why we write all business logic in backend

   
    
    
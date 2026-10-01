const form=document.querySelector('form');

// event type in form
//    1:input
//    2:change
//    3:focus (in doesn't show bubbling effect you have to attached individual element eventlistner)
//    4:focusin(it show bubbling effect)
    // 5: focusout(it show bubbline effect)


// form.addEventListener('submit',(event)=>{
//     // console.log(event.target.id);
//     // console.log(event.target.value);
//     console.log(event.target.value);
//     console.log("form submited");
// })


// form.addEventListener('reset',(event)=>{
//     // console.log(event.target.id);
//     // console.log(event.target.value);
//     console.log(event.target.value);
//     console.log("form reseted");
// })



// how to access all element for value
form.addEventListener('submit',(event)=>{

     event.preventDefault();   //it prevent the refreshing of page
    //  because the defalut behaviour of form the send the data in backend and refresh the page


    // const first=document.getElementById('first');
    // console.log(first.value);

    // const second=document.getElementById('second');
    // console.log(second.value);

    // const third=document.getElementById('third');
    // console.log(third.value);
   
    
//    To avoid the writing (collecting data) for every element use FormData object

 const data=new FormData(form);   //it gives you iterater
 console.log(Array.from(data.keys()));
 console.log(Array.from(data.values()));
 console.log(Array.from(data.entries()));





})
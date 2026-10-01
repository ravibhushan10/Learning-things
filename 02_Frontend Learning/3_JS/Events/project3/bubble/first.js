const grandparent=document.getElementById('grandparent');
const parent=document.getElementById('parent');
const child=document.getElementById('child');


// addEventListener(first_event, Callback, capture )  // it takes three arguments 

// Event bubbling and event capturing

// *******************************Event bubbling *****************************

// By default bubbling run because it value by default false
child.addEventListener('click',(event)=>{
    console.log('child clicked');
    event.stopPropagation();  // now you bubbling propagate to only child 
    // you don't want to propagate because during the process of bubbling you resources are used
},false)

parent.addEventListener('click',()=>{
    console.log('parent clicked');
},false)

grandparent.addEventListener('click',()=>{
    console.log('grandparent clicked');
},false)
// *******************************Event capturing *****************************

// Now event capturing works
// child.addEventListener('click',(event)=>{
//     console.log(event.target);
//     console.log(event.currentTarget);   //khud mai kon sa target hu
//     console.log('child clicked');
// },true)

// parent.addEventListener('click',(event)=>{
//     console.log(event.target);
//     console.log('parent clicked');
// },true)

// grandparent.addEventListener('click',(event)=>{
//     console.log(event.target);    // means iss event ko kis wale element in trigger kiya hai
//     console.log('grandparent clicked');
// },true)

// Create element through JS



const header1=document.createElement('h1');
header1.textContent="Hello Coder Army";
header1.style.backgroundColor='blue';
header1.style.fontSize='30px';
header1.style.color='white';



const header2=document.createElement('h2');
header2.textContent="Hello Bhai Kaise Ho";
header2.style.backgroundColor='blue';
header2.style.fontSize='30px';
header2.style.color='white';

const header3=document.createElement('h3');
header3.textContent="Hello Bhai Kaise Ho";
header3.style.backgroundColor='blue';
header3.style.fontSize='30px';
header3.style.color='white';

// Add to DOM

const root=document.getElementById('root');
root.append(header1);
root.append(header2);
root.append(header3);
// Here you have to write the multiple line of code again and again



// *****************************************************************************

// Create multiple elements with only one object

const React={

    // styles={fontSize:'20px',backgroundColor:'green',color:'white'}

    ravi:function(tag,property,children){
       const element= document.createElement(tag);
       
       element.textContent=children;
       for(let key in property){
           element.style[key]=property[key];   //element.style.fontsize===element.style[key]; both are equal
       }
        
       return element;
    }
}

// DOM Manipulation is called Rendring
const ReactDOM={
    render:function(element,root){
         root.append(element);
    }
}


const header4=React.ravi('h1',{fontSize:'20px',backgroundColor:'green',color:'white'},'Hello Ravi');
const header5=React.ravi('h2',{fontSize:'20px',backgroundColor:'green',color:'white'},'Hello Ravi Bhai Kaise Ho');
const header6=React.ravi('h2',{},'Hello Ravi Bhai Kaise Ho');

// Create and unordered list


const l1=React.ravi('li',{},"HTML");
const l2=React.ravi('li',{},"CSS");
const l3=React.ravi('li',{},"JS");

const list=React.ravi('ul',{},)


ReactDOM.render(header4,document.getElementById('root'));
ReactDOM.render(header5,document.getElementById('root'));
ReactDOM.render(header6,document.getElementById('root'));


// Final conclusion: i don't want to use JS outside(like root.append() , element.style.bcg) so im wrapping into the object and im working only with own created function


// here this is not an original react
// React:Object
// ReactDOM:Object









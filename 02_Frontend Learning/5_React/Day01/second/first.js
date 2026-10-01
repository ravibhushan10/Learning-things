const React={
    ravi:function(tag, property, children){

        const element=document.createElement(tag);

        if (typeof children === 'object') {
            for (let val of children) {
                element.append(val);
            }
        }
        else{
            element.textContent = children;
        }
        
        for (let key in property) {
            element.style[key] = property[key];
        }
        return element;
    }
}
// DOM Manipulation is called Rendring(Put it the DOM into actual position)
const ReactDOM = {
    render: function (element, root) {
        root.append(element);
    }
}
// This is the blueprint of  our original React(Library of JS);

const header4 = React.ravi('h1', { fontSize: '20px', backgroundColor: 'green', color: 'white' }, 'Hello Ravi');
ReactDOM.render(header4, document.getElementById('root'));





// **************************Original React ********************************

// React is build by developer of Facebook and it is maintained by Facebook

// Basically React is nothing it is a short form(short way of writing) of JS

// In React all cases are handle for all operation and written all function and method

// This all functionallity we are importing from the "React" Library(without thinking and tension of how they implemented just we are using it)







// Create and unordered list
const li1 = React.ravi('li', {}, "HTML");
const li2 = React.ravi('li', {}, "CSS");
const li3 = React.ravi('li', {}, "JS");

const list = React.ravi('ul', {}, [li1, li2, li3]);





ReactDOM.render(list, document.getElementById('root'));
















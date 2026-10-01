// ************* Accessing attribute of a element *********
// 1:getattribute
// 2:setattribute
// 3:removeattribute


const element=document.getElementById('root');
console.log(element.getAttribute('id'));
console.log(element.getAttribute('style'));  //Null when not added 

element.setAttribute("custom",'20');  //to add attirbutes
element.setAttribute("class",'Lokesh');  //to update/change  attirbutes

element.removeAttribute("custom");

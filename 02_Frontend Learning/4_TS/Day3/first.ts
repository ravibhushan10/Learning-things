interface person{
    name:string,
    age:number,
    gender:string,
    aadhar ?:number  
};
// if a person don't have a aadhar then how it fill

// so use optional

const obj:person={
    name:"rohit",
    age:20,
    gender:"male",
    aadhar:7686678678  //here you can aadhar remove it also because its optional for any object
};


// ****************Utility of Objects ******************

// Partial<customer>
// <customer>
// <customer>


interface customer{
    name:string,
    age:number,
    balance:number
}



//  1: Partial<customer>
// all property are optional
const obj2:Partial<customer>={
    name:"ravi",
    balance:23
}


//  2: required<customer>
// all property are Required(you can't leave anyone)
const obj3:Required<customer>={
    name:"ravi",
    age:23,
    balance:23
}



//  3: Readonly<customer>
//  you can only read the value
const obj4:Readonly<customer>={
    name:"ravi",
    age:23,
    balance:23
}
// obj4.name="mohan";  //you can't change(modify) the value of any property 


// *************Array of object***********

// First method to write
const arr:{name:string,age:number}[]=[{name:"ravi",age:20,},{name:"lokesh",age:21,}];


// Second method to write

interface People{
    name:string,
    age:number
};
const arr2:People[]=[{name:"ravi",age:20,},{name:"lokesh",age:21,}];
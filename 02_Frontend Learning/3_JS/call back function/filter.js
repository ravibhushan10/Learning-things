// Filter = it is using to filter the data here can't modify the value

let arr=[11,20,30,41,50,44,35];

// here filter expecting callback function
const result = arr.filter((num)=>{

    return num%2==0;
    // return true or false
    // for true select the value
    //for false not select the value
})

console.log(result);


// use case of filter

const students=[
    {name:"rohan",age:22,marks:70},
    {name:"mohan",age:20,marks:90},
    {name:"sohan",age:24,marks:100},
    {name:"darshan",age:28,marks:40},
    {name:"ravi",age:29,marks:30},
]

// all method to write filter

// const result3= students.filter((value)=>{
//     return value.marks>50;
// })


// const result3=students.filter((value)=> value.marks>50);

// here destructuring of object and selecting only marks
const result3=students.filter(({marks})=> marks>50);


console.log(result3);


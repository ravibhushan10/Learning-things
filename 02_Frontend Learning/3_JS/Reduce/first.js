// reduce 
const arr=[10,20,30,40,50,60];

// const result = arr.reduce(callback function initializer)
// (accumulator() , current(10,20,30... one by one))


// const result = arr.reduce((acc,curr)=>{
//     console.log(acc,curr);
//     acc=acc+curr;
//     return acc;
// },0)   //here acc initialize with 0


const result = arr.reduce((acc,curr)=>acc+curr,0);  //here jo bhi return hoga oo acc ke under jayega function wale me final me result me jayega

console.log(result);


let fruits=["orange","apple","graps","banana","banana","banana","apple"];
// final result object ke form me , orange:1,banana:3,apple:2,graps:1


const final=fruits.reduce((acc,curr)=>{
   if(acc.hasOwnProperty(curr))
    {
        acc[curr]++;
    }                           // acc.hasOwnProperty(curr) ? acc[curr]++ : acc[curr]=1;
    else{
        acc[curr]=1;
    }
    return acc;
},{orange:2,
    apple:2
})  //acc initialize with empty object
console.log(final);


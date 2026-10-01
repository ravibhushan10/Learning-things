// map=here we can modify the value

const arr=[10,20,30,40,50];
const result=arr.map((num)=>{
    return num*num;
})
console.log(result);


// even number ka square

const arr2=[1,2,3,4,5,6,7];
const result2=arr2.filter((num)=>num%2==0).map((num)=>num*num).map((num)=>num/2);
console.log(result2);
// for loop

// here you have to write only let not const because const fixed the value of i so this is wrong
for(let i=0;i<20;i++)
{
    console.log("hello");
} 


// js is slow because every time new space is allocated for sum and i for each iteration
let sum=0;
for(let i=1;i<=10;i++)
{
    sum+=i;
}
console.log(sum);

for(let j=0;j<6;j++)
{
     let str="";
    for(let i=1;i<=5;i++)
        {
          str+=i;
        }
        console.log(str);
}


let i=1;
while(i<6)
{
    console.log(i);
    i++;
}
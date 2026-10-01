let num:number=20;


// ************Type Refrence ********************
// type refrence in javascript refers to the ability of the typescript compiler to automatically dtermine the type of a variable based on the value assigned to it.


let x=10;  //here typescript compiler implicitly determine the type Number based on the value assinged to it

// x="ravi";



// ***************** any ******************

// here type:any (means it works like js reassing different types of value)
// here type checking is not done

let money:any;
// let money;  
money=20;
money="lokesh";
console.log(money.toUpperCase());
// it try to convert 20 to uppercase but not gives error 

// so don't use any


// ******************** unknown ***************
// to perform any operation firstly check the type so your code not blast(fate)


// if you don't know the value of variable at compile time then set it to unknown

let value2:unknown;
value2="rohit";
value2=20;


if( typeof value2==='string'){

    console.log(value2.toUpperCase());
}
if(typeof value2==='number')
{
    console.log(value2.toFixed(2));
}


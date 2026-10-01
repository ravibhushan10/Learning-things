console.log("Hello");
let b=20;


function greet(){
    let a=10;
    let b=1000;

    // closure is a type of function that store all the references of variable used in this function so it access later then it called
    function meet(){
        let c=4223;
        console.log(a);
        console.log(b);
        console.log(c);
    }
    a=678678;
    return meet;  //Here this is returing the refrence of meet

}
// when function execution is end then it out of stack but our function is stored in the heap 
// stack se bahar ja chuka hai but heap me hai to na 
// maine uska address pakar ke rakha hai to call kar sakta hu


// num= address of meet
const num=greet();
num();   //with the help of address we calling meet (20)




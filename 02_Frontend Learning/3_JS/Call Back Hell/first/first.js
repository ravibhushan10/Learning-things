// Callback function:  when entire function pass through as a argument in function

function fetchuser(functioncalling){
    console.log("Fetching the user detail.....");
    setTimeout(() => {
        console.log("data fetching successfully");
        const name='ravi';
        functioncalling(name);
    }, 2000);
}

function greet(name){
    console.log(`Hello ${name}`);
}
function meet(name){
    console.log(`Hello ${name}, I will meet in delhi`);
}

fetchuser(meet);
fetchuser(greet);







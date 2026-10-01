console.log(Math.E);
console.log(Math.LN10);
console.log(Math.PI);
console.log(Math.pow(4,3));


// floor value = niche vali value
let num=34.5;
let num2=50.788;
console.log(Math.floor(num)); //34
console.log(Math.floor(num2)); //50

// ciel value
let ravi=34.01;
console.log(Math.ceil(ravi));

// total no= (max - min +1)+min

// how to generate a number between 0 to 9 and 0 to 100
console.log(Math.floor((Math.random()*10)));
console.log(Math.floor((Math.random()*100)));

// 1 to 10
console.log(Math.floor((Math.random()*10))+1);

// 10 to 20 
console.log(Math.floor((Math.random()*10))+10);

// 50 to 100
console.log(Math.floor((Math.random()*50))+50);

// 1 to 6
console.log(Math.floor((Math.random())*6)+1);


// 50 to 100 = total no 51 ( 0 to 50)  and add karo 50 for getting higher
console.log(Math.floor((Math.random())*50)+50);

//30 to 40
console.log(Math.floor((Math.random())*10)+30);

// don't use math.random() for OTP generation because it uses system clock to find random  value 
// math.random() is not a random function because its algorithm is already defined so it gives you fixed value using your current system clock time
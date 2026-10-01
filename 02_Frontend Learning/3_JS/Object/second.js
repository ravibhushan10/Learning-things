// nested object
const user={
    name:"ravi",      // deep copy when use assign
    balance:420,

    address:{
        pincode:84321,    // shallow copy  when use assign
        city:"muzaffarpur"
    }
}
console.log(user.address);
console.log(user.address.city);

const user2=Object.assign({},user);
console.log(user2);


//here nested object are using shallow copy = means changes in user2 reflected in  user
//here normal object are using deep copy = means changes in user2 not  reflected in  user
user2.name ="mohit";
user2.address.pincode=478943928;
console.log(user);
// even spread(...) operator using same concept


// best practice to use copy = use structureclone(it creates the deep copy of all even for nested object)


const user3={
    a:1,       //deep copy
    b:2,
    c:{
        c1:3,
        c2:4,
        c3:{     //shallow copy
            c11:5,
            c12:6
        }
    }
}


const user4={...user3};

user4 .c.c2=100;
user4.c.c3.c11=500;
user4.a=43432432;

console.log(user4);
console.log(user3);

class person{
    name:string;
    age:number;
    
    constructor(n1:string,n2:number)
    {
        this.name=n1;
        this.age=n2;
    }
    greet():void{
        console.log(`hi ${this.name}`);
    }
}

const obj2=new person("rohit",20);
console.log(obj2);
obj2.greet();


// Public , private, protected
class Customer{
   public name:string;
   private age:number;
   protected account:number;
    
    constructor(name:string,age:number,account:number){
        this.name=name;
        this.age=age;
        this.account=account;
    }
    // you can also give the (access modifier) to function
    // public,private,protected

   public meet():void{
        console.log(this.age);
    }
};



const c1=new Customer("Deepak",20,2423423);
console.log(c1.name);


class Employee extends Customer{

    // By default everyone is public
    salary:number;
    
    constructor (salary:number,name:string,age:number,account:number)
    {
        super(name,age,account); // constructor call for parent class
        this.salary=salary;
    }

    // greet():void{
    //     console.log(this.age);  //you can't access age(private) in function or other places but with the help of parent(super) consturctor call you can access the all data memebers
    // }

    // protected access in here child class
};

const e1=new Employee(423243,"ravi",23,23,);


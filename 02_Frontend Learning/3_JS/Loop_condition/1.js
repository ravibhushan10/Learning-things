    // if-else
     let age=19;
     if(age>17)
    {
        console.log("eligible for vote");
    }  
    
    else{
        console.log("not eligible for vote");
    }

    // if-else if_else
    let umar=20;

    if(umar<18)
    {
        console.log("kid");
    }
    else if(umar>=45)
    {
        console.log("old");
    }
    else{
        console.log("young");
    }


    // for multiple condition
    // case :int ,float,String;

    // here it check with strictically (x===x)
    
 
    switch(new Date.getday()){
        case 0: 
              console.log("sunday");
        break;

        case 1: 
              console.log("monday");
        break;
        
        case 2: 
              console.log("Tuesday");
        break;

        case 3: 
              console.log("Wednesday");
        break;

        default:
            console.log("other day");
          }

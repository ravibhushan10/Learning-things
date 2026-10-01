const str ="The rain in Spain mainly stays in the plain.";
const regex=/\bin\b/g;

// Here you can replace all "in" by "at" with the help of regex
console.log( str.replace(regex,'at'));

// But with the normal string you can only replace first match.
console.log( str.replace('in','at'));
console.log( str.replaceAll('in','at'));




// ************************************************

const str2="I have the 2kg mangoes and I run 5km daily."
const regex2=/(?<first>\d+)(?<second>\w+)/g
                 //$1        //$2
// First capturing group and second capturing group

// These all things in substitution method
str2.replace(regex2, '<b><i>$&</i></b>');
str2.replace(regex2, '<b><i>$2 $1</i></b>');
str2.replace(regex2, '<b><i>$<second> $<first></i></b>');

// *************
// mathc ,cg1,cg2,.... , last one is matched index, original string, all capturing group name,undefined
const finalString=str2.replace(regex2, (match,a,b,c,d,e)=>{

   console.log({match,a,b,c,d,e});

    // using the capturing group value
   return `${a*10}${b.toUpperCase()}`;

//     // using the capturing group name
//    return `${e.first*10}${e.second.toUpperCase()}`;
})

console.log(finalString);



// *********************
console.log(str2.search(regex2));  //return the only first matched index otherwise -1

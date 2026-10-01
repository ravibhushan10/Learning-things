const str="The rain in 54Spain mainly stays in 4the plain."
const regex=/(?<first>\d+)(?<second>\w+)/g;

// when global flage is not enable
// Both exec() , match() gives the same output but when we use the exec() then the value of lastIndex is increased but not in the case of match()
console.log(str.match(regex)); //only give the first match

// when global flage is  enable
console.log(str.match(regex));  //give an array with all matches

let arr=[23,323]


// matchAll()
str.matchAll(regex)  //it gives you the iterator you have to spread it and see the full details
console.log([... str.matchAll(regex)]);

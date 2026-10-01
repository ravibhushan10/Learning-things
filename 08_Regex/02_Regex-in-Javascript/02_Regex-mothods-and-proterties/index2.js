const str = "The rain in Spain mainly stays in the plain."
const regex = /\bin\b/g
const phone=/^\d{10}$/

let match;
while ((match = regex.exec(str)) !== null) {
    console.log(match);
    console.log(match.index);
}

// Test method = it only return the true of false (is "in" present or not)
console.log(regex.test(str));


// How to validate the phone number in regex
console.log(phone.test("4354399999"));

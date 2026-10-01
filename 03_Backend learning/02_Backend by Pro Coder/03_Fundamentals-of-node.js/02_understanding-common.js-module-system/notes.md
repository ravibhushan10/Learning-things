when we run require("./sum)  then it execute the function and find the file path and execute the all code of that file . 
<!-- ************************* -->
So require function vo value return karega jo module.exports me assign huaa hoga 
<!-- ************************* -->
return sum string
module.exports = "sum string";

return  sum and product 
module.exports = {sum,product};
<!-- ********** require() *************** -->
It works in three steps :
1: takes a valid path file
2: run the whole code of given file path
3: it return the value that assing to module.exports
<!-- ************************* -->
Extension of file is optional you can give or not
const sum = require("./sum.js");
<!-- ************************* -->

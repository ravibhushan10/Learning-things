Both  '^'  '$'  check the starting of the string and ending of the string (if the newline is not started).

if new line started then it check again from the newline (if multiline flag is enable)

<!-- ***************** -->
^  -> it checks starts of the string
^[a-z] -> it maps full code file and check the whole file is start from a-z
^hello

^[A-Z] -> Apple , Mango , but not match apple, mango
<!-- ************** -->
$  -> it check it starts with the ending character or not

lor$ -> find in the last 'lor' present or not



<!-- ******** Select the name which has the last name is Singh **************** -->

.+Singh$

ravi Singh
lokesh Singh Thakur
rajan Kumar
mukesh Kumar
jay Ray

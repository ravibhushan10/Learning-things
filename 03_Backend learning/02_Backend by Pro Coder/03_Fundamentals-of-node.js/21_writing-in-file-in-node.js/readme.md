fs.writeFile("ravi.txt","hello ravi");
fs.appendFile("ravi.txt","hello ravi");  it append the string in existing content

-> when ravi.txt is not present then it create and write the string , when it is available then it simply add the string.
-> if the content is available then it remove everthing and add then new comming string.
<!-- ************* -->
-> you can write here text and buffer also


<!-- ************ -->
err : its is a object

If any error comes then use a seprate file to shows the error otherwise its not vissible to user (when program is end then its gone)  so use the seprate file for this..

-> use error.log file (you can take any file like .txt ) but conventation .log file
<!-- ************** -->
use await in both case during the writing and reading the file

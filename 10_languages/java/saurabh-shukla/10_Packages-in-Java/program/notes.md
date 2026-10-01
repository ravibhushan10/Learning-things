<!-- ******** -->
'javac'  is not recognized as internal or external command ????

ans : when you try to run outside from the bin folder then Your OS doesn't find the javac.exe file to compile your program..

-> Firstly add the path and tell to OS when i run from the anywhere then execute this file for me.

<!-- ******** -->
A package is a group of related classes and interfaces organized together in a folder/directory.

<!-- **** why use *** -->
Groups related classes together
Makes the project clean and easy to manage
Two classes with the same name can exist in different packages
Reusability


<!-- ********** -->
.   : current folder
..  : parent folder

<!-- **** How to compile ****** -->
javac -d . 'filename'  : in current folder make the package
javac -d .. 'filename'  : in parent folder make the package

<!-- to run  -->
java package.filename
java ravi.helloworld

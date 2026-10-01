start "application name" -> open any app through terminal

which "node" -> it gives you the exact path of that package
which "git" -> similar

<!-- ************************ -->
can i say terminal like browser and different -different shell like cmd , powershell , git bash, azure shell like different type of browser edge,chrome,safari
<!-- ******************** -->

explorer . -> open that current file directory into the file explorer
<!-- **************** cmd  ******************* -->

history -> get the all previous command run

cd /d -> go to d drive
cd /c -> go to c drive

cd / -> go to root directory
cd ~ -> go to home directory
explorer . -> open file explorer
<!-- **************** cmd  ******************* -->
ls/dir-> to show all folder in the dirctory
D:  ->  To change the drive to D
C:  ->  Go to C drive
cd ../../../ -> go to multiple level up
cd r+tab ->  only write the first-character of folder
cd "ravi maurya" -> put the string when space in folder

cat ravi.js -> to see the content of file
touch ravi.js -> create the new empty file
touch ravi.js ravi.txt ravi.css ravi.html lokesh.css -> create multiple file
mkdir ravi -> create the folder
mkdir ravi lokesh -> create the multiple folder


rm ravi.js -> delete the file
rmdir ravi -> delete the only empty folder
rm -r ravi -> delete the folder(all files/folder present in that) (-r :recursive) .This is the best way to delete


cp <source>  <dest> -> copy the file
mv <source>  <dest> -> move the file
mv <source>   <desktop path> -> to move the file to desktop just copy the path where you want to paste
mv  old_filename  new_filename ->  Rename the file
mv  old_foldername  new_foldername ->  Rename the folder name

<!-- If you delete the files/folder normally then it goes to recycle bin and you can get it by  Ctr+Z   , but when you delete with cmd it not recover it permanently delete -->


<!-- Create and delete 1000 files -->
1:Create

for i in $(seq -w 1 1000); do
    touch "app$i.js"
done


2: Delete

for i in $(seq -w 1 1000); do
    rm "app$i.js"
done


<!-- ***************************************** -->
nano vim -> Both are editor provided by UNIX (vim : very powerful and popular)

nano ravi.js-> edit in nano editor
                                    nano editor -> Ctr+x then Y then exit

vim ravi.js -> edit in vim editor
nano editor-> To edit (type I  then start editing)

type Esc then
:wq!-> save and quit

:q!->quite without saving the change

<!-- ***************************************** -->
cd ~/ -> Go to the home directory
cd /  -> Go to home directory
explorer . -> to open in file explorer


source ~/.bashrc  -> for permanent save

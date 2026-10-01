<!-- **** -->
history = know the all previous commands run
<!-- **** -->


<!-- **** -->
name="ravi"   -> set the value in variable
echo $name    -> print that value
<!-- **** -->


<!-- **** -->
ls -Force     -> to show the hidden items also (use this one)  {windows}
ls -a   (list all) {linux}
<!-- **** -->


<!-- **** -->
cd dir/    -> navigate to down/next directory
cd dir
<!-- **** -->


<!-- **** -->
cd .   (navigate to the current directory)
cd ./
cd ..  (navigate to one dir up/back)
cd ../
<!-- **** -->


<!-- **** -->
ls dir/      -> without going to that folder  list all items
ls dir
ls ravi/work/print/dsa
<!-- **** -->


<!-- **** -->
Absolute = always starts from root /
Relative = always starts from current directory (where you are right now)
-> always works and give the relative path don't provide the absolute path
<!-- **** -->


<!-- **** -->
touch ravi.txt                      -> create empty file
echo Hello bro > ravi.txt           -> create file at a time write something
nano ravi.txt                       -> create edit and save file same time
cat ravi.txt                        -> see the content of file
<!-- **** -->


<!-- **** -->
head -n 5 text.html       -> print the first 5 lines of a file
tail -n 5 text.html       -> print the last 5 lines of a file
<!-- **** -->


<!-- ************************************************************ -->
cat ravi.txt             -> it loads the whole(10gb) file into ram

less ravi.txt            -> it loads the content page by page/ by your screen size { use this one better}
q = quit
-> move forward + backward and search the word
less -N ravi.txt        -> print the line number also for each line
<!-- ************************************************************ -->


<!-- **************************** mv: move or rename  ******************************** -->
mv ravi.md lokesh.md      -> same location means it rename file
mv first/  second/        -> same for the folder also
<!-- ******* -->

<!-- ******* -->
mv ravi.md ../first/second                              -> move files into folder
mv ravi ../first/second                                 -> move folder into folder

mv ravi.md ravi.txt ravi.html  ../first/second          -> multiple files into folder
mv ravi ravi1 ravi2  ../first/second                    -> multiple folder into folder
<!-- ******* -->

<!-- ******* -->
mv server.js /home/ravi/projects/backend.js             -> move and rename same time
<!-- ******* -->

<!-- ************************************************************ -->



<!-- **************************** cp = copy ******************************** -->
cp first.md copy_first.md                 -> copy the file in the same folder
cp -R myfolder /home/ravi/backup/         -> copy the entire folder with content

cp server.js /home/ravi/backup/           -> copy file in that folder

cp server.js /home/ravi/backup/backend.js  -> copy and rename at the same time


when you do the copy then its metadata change like timestamp and owner, to avoid this use -p(preserve)

cp -p server.js /home/ravi/backup/    -> preserve the metadata
<!-- ************************************************************ -->



<!-- ******* -->
rmdir  ravi        -> remove the empty directory
rmdir -r ravi        -> remove the  directory with all files

rm ravi.txt       -> remove the file
<!-- ******* -->



<!-- ***  Dangreous commands**** -->
rm -f ravi.txt   -> force delete
rm -rf ravi/     -> force delete the entire files recursive

rm -rf  /        -> delete the entire root directory
rm -rf  /*       -> delete the entire root directory(inside matches anything)

-> (*) is a wildcard that matches everything

rm second/*.log   -> delete the only .log files in second folder

<!-- ******* -->


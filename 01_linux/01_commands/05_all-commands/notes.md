<!-- ****** date ****** -->
date             -> print the date with local timezone and also time
date -u          -> print the timezone according to the UTC(Coordinated universal time)

date +%y
date +%Y,%H:%M:%S,%d
<!-- ************ -->


<!-- ***** ls ******* -->
ls -A            -> it print the cleaner output without printing the (.) current and (..) parent directory.
ls -R            -> Recursively print the all files and subdirectory


ls -lt           -> sort by modification time
ls -ltr          -> recursive sort by modification time
ls -lS           -> sort by size
<!-- ************ -->


<!-- ************ -->
sort first.txt          -> it sort the file data line by line(ac to ASCII)
sort -r first.txt       -> sort in reverse order

sort first.txt -o second.txt     -> sort and save in new file
sort first.txt -o first.txt     -> sort and save in existing file

sort first.txt > first.txt     -> it delete your data entirely
sort first.txt > second.txt     -> this is safe it creates new file with sorted

sort first.txt | uniq           -> removed duplicate output(show only unique) , but original file same
<!-- ************ -->


<!-- ************ -->
sudo adduser user1                          -> create the new user
sudo passwd user1                           -> change the password

sudo deluser --remove-home user1            -> delete the user with home directory file
<!-- ************ -->


<!-- ************ -->
split -l 4 first.txt                -> split the files by each 4 lines, and this create a many files each has 4 lines.

<!-- ************ -->

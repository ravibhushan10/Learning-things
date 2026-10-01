


<!-- *************** -->
alt +enter -> open the properties for any file and folder
<!-- three types of permissions -->
1: read
2: write
3: execute
<!-- To see file permissions use powrshell in windows -->
ls -lah -> (l=long formate, a= show hidden files also, h=show file size in kb , mb,gb not in bytes)

<!-- ******** Working with wsl ************* -->
type (\\wsl$) in file explorer paht section -> to open the folder in ubuntu environment
then go to home/ravib
<!-- *************** -->


<!-- sudo ls : super user do (sudo) -->

Absolute paht in unix:
/home/ravib/Learning/node/ravi.txt


Realative paht in unix:
node/ravi.txt

<!-- Install node in unix -->
sudo apt install nodejs


<!-- ************* -->
cd . ->current folder
cd ./ ->current folder

cd .. -> parent folder
cd ../ ->parent folder

cd ~ -> go to home directory
cd ~/ -> go to home directory
<!-- ************* -->
To execute script files in wsl(unix)
chmod +x style.css
./style.css



-> ls -l
                         total bytes    time        file_name
-rw-r--r-- 1 ravib ravib    3        Nov  9 17:18   app.js
time : it show when last time file/folder modified
<!-- ******************** -->

drwxr-xr-x 2 ravib ravib 4096 Nov  9 17:19

-> By default it reserved the 4kB bytes storage for the only directory/folder , not the whole content present in that.. if i add anything in this folder still it show only 4KB
<!-- ******************** -->
drwxr-xr-x 2 ravib ravib 4096 Nov  9 17:25 src
             user  group

drwxr-xr-x(total 10 character)
-rw-r--r--

->if first character is '-' then this is file , 'd' then this is folder
-> ye 3-3 ka group hota hai (rwx: read,write,execute). - means uska permission nahi  hai.
<!-- ******************** -->
chmod(change mode)

chmod -x file/folder_name (now you can't execute the file):permission take
chmod +x file/folder(now you can execute the file):permission give
chmod +r src
chmod +w src

-> this command in the case of write (give the write(w) access only to the user,., but read(r) and execute(x) by all user,group,custom user )
<!-- ******************** -->
->provide the permission to only specific(user,group,others)

chmod o-x ravi.sh (other add or remove)
chmod g-x ravi.sh (group add or remove)
chmod u-x ravi.sh (user add or remove)

<!-- ******************** -->
Read => r => 4
Write => w => 2
Execute => x => 1

stat -c "%A %a %n" app.js : to check the permission in number
<!-- ******************** -->
also change the permission with number which is very fast

       u g o
chmod  6 6 6 app.js
chmod  6 6 0 app.js
chmod  0 0 7 app.js
<!-- ******************** -->
create the alias , so you don't need to write the long command use the shortcut
1: code ~/.bashrc
2: in bashrc file add the "alias shrotcut=  "command"
3: open new terminal/ source ~./bashrc(ye file run ho jata hai only in unix)
<!-- ********* Important *********** -->
Git track : also track the permission change , not only the inside the content track.

git only track the current user (execute permission not the read/write)

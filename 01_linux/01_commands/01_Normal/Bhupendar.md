<!-- ******** -->
hostname = it tell the name of your machine(server name).

<!-- ******** -->

<!-- ******** -->
ipconfig = show the ip address of machine in windows

ifconfig = show the ip address of machine in linux(with details)
hostname -i  = show the only ip address
<!-- ******** -->


<!-- ******** -->
cat /etc/os-release  = show the all details of the system
<!-- ******** -->

<!-- *** tree command ***** -->
tree  = show the all files in tree structure. 

tree -a        = show hidden files/folders also
tree -d        = show and count the only directries
tree -L 2      = show the all things only 2 levels
tree -f        = Print the full path of all items instead of only names
<!-- ******** -->



<!-- *************** -->
apt list --installed    = show the list of all pakages installed
dpkg -l                 = show the list of all packages with version , archiceture, and all things


snap list              = show the list of all packages installed with snap


npm list -g --depth=0  = show the all node packages installed

pip list               = show the all pythong packages
<!-- ***************** -->


<!-- ***************** -->
wc = word count
wc -l  = word count lines

dpkg -l = debian packages list


dpkg -l  | wc -l       = count the total lines present(or tatal packages installed)
pip list | wc -l
snap list | wc -l
<!-- *************** -->


<!-- *************** -->
which tree  =  it shows the tree is installed or not
which bash  = bash installed or not
<!-- *************** -->




===================================

<!-- ********** -->
Soft link(l) = shortcut like youtube,chrome on desktop
-> it stored on the disk level but we put on the desktop for the easy access and fast access.
-> Soft link only stored the actual path of the disk level, when you click then it redirect to that location not store the actual data.
-> When you delete the soft link then you actual file don't delete on disk level.

ln -s ravi.txt  ravi_soft-link.txt

Soft link dosen't increase the count of links =1 , it stays same {but hard liks increase the links count due to copy}
<!-- ********** -->



<!-- ********** -->
Hard link  = Created for the backup, when you changes the anything in the hardlink_file or original file it reflects in both files.

-> But when you copy the file then this things not works thats why we create the hardlinks for the backup if the original file deleted , then our backup file have.

ln  ravi.txt  ravi_hard-link.txt  

<!-- ********** -->
===================================
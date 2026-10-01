Filesystem Hierarchy Standard (FHS)

<!-- ********* / (root) : mother of linux file system ******** -->
This is the top level directory of the entire filesystem.

All the other directories in FHS are inside the root directory.

root directory is owned by root user, they do anything .
<!-- *************** -->



<!-- ****** /bin (binaries) ********* -->
contains essential binary executables that are needed during the boot process, or single user mode.

some binary executed automatic during the boot process time.

Generally accessible to all users.

like : ls, cat , mv , rm .

The commands that don't need the root privileges have inside this directory.
<!-- *************** -->



<!-- ****** /sbin (system binaries) ********* -->
Contains binary executables that used by the system administration.

usually require root privileges to execute, since they involve the system level changes.

Like : reboot, shutdown, fdisk, fsck 

Actually these binary manually executed by person , not done automatically by system.
<!-- *************** -->




<!-- ****** /etc  (configuration) ********* -->
Houses of configuration files of many system services and apps(the things you download).


/etc (system configuration)

/etc/passwd : user account information
/etc/shadow : user password hashes
/etc/group  : group information


/etc (service configuration)

/etc/mysql  : MYsql database configuration
/etc/nginx    : nginx server configuration
/etc/ssh/ssh_config.d  : SSH sever configuration 


Why is it  important : 
many system problem can be solved by the modifying of configuration files. 
they stored the security credentials so be keep in mind.
<!-- *************** -->




<!-- ****** /home (Home of all users) ********* -->
Different users lives here each has own "Desktop Documents Downloads ..." separate from all users .

No one can access the data of others users except the "public" folders it is accessible by all users. only root/admin or admin group user can access the users data.

we set the storage limit for the particular user so , user keep in mind that works all things under this storage (as a root decides how much storage gives to the users)
<!-- *************** -->



<!-- ****** var (variable data) ********* -->
It stores the variables data like : system logs , temporary files because these file changes frequently.

/var/log  : stores the System and Application logs. 
/var/lib  : stores the States information of the various applications
/var/tmp  : stores temporary files created by the various applications(this is different from the "/tmp/"  root level directory)
/var/spool  : it gives you the info about the printing(printer) and mail services. You can correct your printer from here.

Why this is important : 

This gives you the all logs to check the security analysis , health of system, potential issues occurred , this help to check what happened last time.

it help to identify the security threats and unauthorized access attempts.


Cleanup : 

var/tmp : clean this folder regularly so you don't overload your storage.
Log files grow large so its important to rotate them to save the disk space.

ensure proper permission of each user inside the /var/  because anyone can read the logs and penetrate your security.
<!-- *************** -->



<!-- ********usr (user programs and libraries) ******* -->
it stored things related to the per users.
<!-- *************** -->



<!-- ****** /opt (optional software )********* -->
It stores the all third parties software installed your system which is not a part of the linux base system.

mount : in windows every drive (c,d,e) has its own tree but in the linux there is only one tree which is start from the root(/) , so any storage device you plugin in your system firstly you have to mount.

mount : attach that storage device into the root tree then you able to access and see the contents of that storage device.

because every storage device has own file system (ntfs, ext4 , fat32), so when you mount then linux able to read these files.
<!-- *************** -->



<!-- ****** /dev (vitual devices interface )********* -->
In linux everything is a file including the hardware.

common devices files : 
/dev/sda  or /dev/sdb  : it represent the hard disk

/dev/null  :  it is a special file that discard automatic anything you write in this. This is used to write the errors and warnings.
<!-- *************** -->




<!-- ******* /tmp (Temporary file system)******** -->
used to store the temporary files created by the various applications and system process.

Files are typically deleted when the application or process finishes, or system reboot.

/tmp  : has the "write" and "execute" permission. 
So this is first way to enter to anyone system, because all others folders don't have the these access.Also this is used in hacking.
<!-- *************** -->



<!-- *************** -->
/sys    :  Virtual file system providing info about the System hardware.
/boot   : store the boot loader files.
/mnt    : mount point for the external media
/proc   : virtual filesystem providing info about the system processes.
<!-- *************** -->
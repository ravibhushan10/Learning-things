<!-- *********** -->
sh   = shell(first version of shell)
bash = Bourne again shell(improved version of sh)


shells    -> zsh, sh, bash, csh(corn shell)

editor    -> vim, nano, vi, gedit.

<!-- *********** -->
echo $0                           -> shows your current login shell
echo $SHELL or which $SHELL       -> shows your login shell path
cat /etc/shells                   -> shows the all shell available in your system

<!-- *********** -->
shell scripting is a method to execute the set of commands sequently by putting the all commands in one file, and run using the shebang.
<!-- *********** -->

<!-- *********** -->
shebang(#!) : written in first line


#!/bin/bash        # run this script using bash
#!/bin/sh          # run using POSIX sh
#!/usr/bin/python3 # run using Python 3
#!/usr/bin/node    # run using Node.js

-> means you are telling to os which shell you have to use to enterpirate(run commands)of the file.
<!-- *********** -->


<!-- ***** how to run script****** -->
Make sure script has execute permission. (rwx)

Run :
./script.sh
/path/script.sh     -> give the absolute path here
sh script.sh
bash script.sh

ctl+c  = for terminate
ctl+z  = for stopp
<!-- *********** -->

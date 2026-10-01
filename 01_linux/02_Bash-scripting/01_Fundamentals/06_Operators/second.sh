#! /bin/bash



# it returns the all lists and last line 0 , because it is success command
ls /etc/
echo $?

# it returns the the error and last line non zero value(1- 255) , because it is wrong command
ls /ldks/
echo $?

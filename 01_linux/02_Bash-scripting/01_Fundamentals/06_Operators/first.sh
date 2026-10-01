#! /bin/bash
a=20
b=30

if [[ $a -eq $b ]]; then
   echo " $a and $b is equal"
elif [[ $a -gt $b ]]; then
   echo " $a is greater than $b "
else
   echo " $a is less than $b "
fi

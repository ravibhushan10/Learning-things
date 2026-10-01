#!/bin/bash
name="ravi"

if [[ ${name} -eq -z ]];then
   echo "String is not empty"
else
   echo "String is empty"
fi



if [[ ${name} -eq -n ]];then
   echo "String is empty"
else
   echo "String is not empty"
fi

#! /bin/bash

if [ $# -eq 0 ]; then
    echo "Please tell your name and age"
elif [ $# -eq 1 ]; then
    echo "Please tell your age"
else
    echo "Hello $1 you are $2 years old!"
fi

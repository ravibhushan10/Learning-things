#!/bin/bash

string="Hello ravi HOw are you?"

echo "Length is:${#string}"
echo "upper case:  ${string^^}"
echo "lower case:  ${string,,}"
string=${string/ravi/Lokesh}
echo $string

echo ${string:6:11}



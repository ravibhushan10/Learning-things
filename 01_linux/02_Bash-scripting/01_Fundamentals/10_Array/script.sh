#!/bin/bash
fruits=("apple" "mango" "orange" "banana" "guava" "palm" 4 7 5 5.6 )
#multiple types of value you can insert

echo ${fruits[0]}    # apple
echo ${fruits[2]}    # mango
echo ${fruits[@]}    # all elements — @ means "all"
echo ${fruits[*]}    # all elements — same as @
echo ${#fruits[@]}   # total count — # means "length of"


fruits[1]="grapes"        # replace index 1
fruits+=("pineapple")     # append new element at end
fruits+=("pineappleds"  "ravi" "lokesh")     # append new element at end
unset fruits[2]           # delete element at index 2


for fruit in "${fruits[@]}"; do
    echo "Fruit: $fruit"
done


echo "Print the value form the specific range"
echo ${fruits[*]:3:5}                #index number : how many values

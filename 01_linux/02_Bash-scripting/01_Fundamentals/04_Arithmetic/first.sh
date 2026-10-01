#! /bin/bash

read -p "Enter first number:" first
read -p "Enter second number:" second

sum=$(($first+$second))
diff=$(($first-$second))
mul=$(($first*$second))
div=$(($first/$second))
mod=$(($first%$second))

echo "Sum is: $sum"
echo "difference is: $diff"
echo "Multiply is: $mul"
echo "Division is:$div"
echo "Moduls is:$mod"

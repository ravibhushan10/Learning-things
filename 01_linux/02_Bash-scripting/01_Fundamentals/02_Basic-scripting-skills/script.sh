#! /bin/bash
echo "This is your second script"

name="ravi"
echo "your name is $name"
echo "today date is $(date)"

#first method to take a input from the user
echo "Enter the first number:"
read first
echo "Enter the second number:"
read second
echo "The sum of $first and $second is: $((first+second))"


#second method to take a input from the user
read -p "Enter your name:" username
echo "Your name is: $username"

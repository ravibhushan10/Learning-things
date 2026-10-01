#! /bin/bash
# read -p "Enter your username:" username
# read -s -p "Enter your password:" password
# echo "Your username is $username and password is $password"

echo -n "Enter your name:"        # Here -n means no newline cursor blinks on the same line
read name
echo  -n "Enter your password:"
read -s password

stars=$(printf '%0.s*' $(seq 1 ${#password}))

echo "Username: $name"
echo "Password: $stars"

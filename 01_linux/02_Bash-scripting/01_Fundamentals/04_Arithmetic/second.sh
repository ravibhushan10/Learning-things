#! /bin/bash
read -p "Enter the number:" num
echo "Square is : $(($num**2))"
rem=$((num%2))

# -eq (==)

if [ $rem -eq 0 ]; then
   echo "Number $num is Even"
else
   echo "Number $num is Odd"
fi

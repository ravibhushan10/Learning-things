#! /bin/bash
read -p "Enter the price:" price
read -p "Enter the total quantity:" quantity

total_price=$((price*quantity))
gst=$(echo "($total_price*18)/100" |bc)
echo "Final total Bill is: $(($total_price+$gst))"

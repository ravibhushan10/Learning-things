# Method 1 — $(( )) — integers only
result=$(( 10 + 3 ))   # + - * / % all work
remainder=$(( 10 % 3 )) # % = modulus (leftover after division)
power=$(( 2 ** 8 ))     # ** = exponent

# Method 2 — expr — older, needs spaces
result=$(expr 10 + 3)

# Method 3 — bc — decimals/floating point
result=$(echo "10.5 + 3.2" | bc)
result=$(echo "scale=2; 10 / 3" | bc)
#              └─ scale=2 means 2 decimal places


<!-- ********** -->

<!-- ********** -->
<!-- ********** -->

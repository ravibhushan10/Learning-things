<!-- ***** For loop **** -->
for((i=1;i<=10;i++)); do
    mkdir day$i
done
<!-- iterate over argument -->
for arg in "$@"; do
    echo "Argument: $arg"
done
<!-- ********* -->





<!-- **** while loop ***** -->
count=1
while [[ $count -le 5 ]]; do
    echo "Count: $count"
    (( count++ ))   # (( )) for arithmetic, ++ increments by 1
done
<!-- ********* -->

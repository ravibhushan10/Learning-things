ARITHMETIC  →  $(( + - * / % ** ++ -- ))
NUMBERS     →  [ -eq -ne -gt -lt -ge -le ]
STRINGS     →  [ == != -z -n ]
LOGICAL     →  [ -a -o ! ]  or  [[ && || ! ]]
FILES       →  [ -f -d -e -r -w -x -s ]
ASSIGN      →  = += -= *= /= %=
REDIRECT    →  > >> < 2> 2>&1 |
SPECIAL     →  $# $@ $* $0 $1 $? $$ $!


<!-- **** For numbers****** -->
-eq (==)
-ne (!=)
-gt (>)
-lt (<)
-ge (>=)
-le (<=)
<!-- ********** -->

<!-- **** For strings ****** -->
-z = string is empty
-n = string is not empty
<!-- ********** -->



<!-- **** Logical ****** -->
old way:

-a     =and
-o     =or
!      =not

new way :

&&   =and
||   = or
!    =not
<!-- ********** -->

<!-- ********** -->
'${#var}'   = find the length of string
<!-- ********** -->


<!-- ********** -->
$0          script name                    name of the script itself
$1–$9       positional parameters          individual arguments
$?          exit status                    return code of last command (0 = success)
$$          process ID                     PID of the current script
"$!"        background PID                 PID of last background command
<!-- ********** -->




<!-- ********** -->
>        write output to file (echo "hii" > first.txt)
>>       append output to file (echo "hii" >> first.txt)


<        read input from file (read line < first.txt)

<!-- ********** -->

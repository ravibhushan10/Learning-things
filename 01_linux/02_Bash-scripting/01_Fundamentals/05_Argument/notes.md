shift : when we use then our $0 is same but, it escape the  $1 argument and start from $1=$2, $2=$3 and so on...

<!-- ********** -->
Argument:  $0  $1 $2
    $0        $1   $2
./script.sh  ravi bhushan lokesh pawan


$0                -> name of the script it self
$1 , $2 ....      -> positional argument
'$#'                -> count total arguments
$@                -> all argument by separate each one
$*                -> all argument in one string
<!-- ********** -->

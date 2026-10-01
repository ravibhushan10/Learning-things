# Syntax 1 — using the "function" keyword
function greet {
    echo "Hello, World!"
}

# Syntax 2 — without the keyword (more portable)  this is used more in modern day
greet() {
    echo "Hello, World!"
}


<!-- ****** calling ****** -->
just write the function name , without any parenthesis.

greet
<!-- ************ -->


<!-- ***** Argument ******* -->
Bash functions do not declare parameters by name. Instead, arguments are accessed using positional variables.

greet_user() {
    echo "Hello, $1! You are $2 years old."
}

greet_user "Raj" 25
# Output: Hello, Raj! You are 25 years old.
<!-- ************ -->


<!-- ***** Return value ******* -->
Bash functions do not return values like other languages. There are two approaches:

<!-- ***** -->
Approach A — return (only for exit status, 0–255):

is_even() {
    if (( $1 % 2 == 0 )); then
        return 0   # 0 = success/true in bash
    else
        return 1   # non-zero = failure/false
    fi
}

is_even 4
echo $?   # Output: 0
<!-- ***** -->



<!-- ***** -->
Approach B — echo + command substitution (for real values):

square() {
    echo $(( $1 * $1 ))
}

result=$(square 5)
echo "Square is: $result"   # Output: Square is: 25

<!-- ************ -->

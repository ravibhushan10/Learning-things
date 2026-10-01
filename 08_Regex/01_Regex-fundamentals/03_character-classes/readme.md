<!-- ****************** Match all one by one character ************************ -->
Defining the set of characters to match [abc]
-> match the all character a , b, c in whole code.
-> match the all vowels [aeiou]



<!-- ****************** Range ************************ -->
Range : [a-z]
-> find the all character that present a-z
Range : [A-Z]
-> find the all character that present A-Z
Range : [0-9]
-> find the all character that present 0-9
Range : [/-U]
-> find the all character that present /-U
Range : [/-.]
-> find the all character that present /-.

<!-- ***** -->
[0-34] -> firstly match 0-3 all and (only 4 )
-> It only find the range of first digit (0-3) and afterwards whatever you write in right side after one digit it try to match as it is.

[0-9ab] ->it match 0-9 and a,b
<!-- ******* -->

[\u{0876}-\u{9875}] -> for emoji range

->it find the range from the smaller->higher according to the value of ASCII
-> higher->lower gives the error



<!-- ****************** Combined Range ************************ -->
[0-9A-Za-z] -> it match all numbers and character
[0-9*/)a-zA-z] -> both combined range and extra match



<!-- ****************** Negated character classes ************************ -->
The caret ^ symbol inside square brackets creates a negated character class.

[^aeiouAEIOU] ->match anything except the vowels
[^0-9]    ->don't match the digits and match all things
[^a-z ] -> a-z including the space don't match


apple,banan,gauva;
[^,;]+  -> means it match the whole word count=3
[^,;]   -> it match the each character count=17

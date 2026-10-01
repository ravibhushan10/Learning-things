1: Positive lookahead ->
`pattern1(?=pattern2)`

\d+(?= (?:min|hours)) -> kisi bhi number ke aage agar min | hours ho to select karo

20 people can do this task in 15 min.
20 people can do this task in 15 minutes.
20 people can do this task in 15 hours.

<!-- *****Negative lookahead******* -->
`pattern1(?!pattern2)`
\d+(?! people)\b  ->  same work with negative lookahead


<!-- ****************************************** -->
1: positive lookabehind
`(?<=pattern1)pattern2`


1: negative lookabehind
`(?<!pattern1)pattern2`

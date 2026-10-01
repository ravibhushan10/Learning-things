


<!-- ************* -->
flags and modifires are both same..

<!-- *************** -->
1: {g} global (in vs code by default global flag is on)

2: {i} case-insensitive -> it match both capital and small letter , it has to match the just chararcter like (Hello and hello both match)
-> In vs code by default case -insensitive is 'ON" means it match (both hello and Hello)
-> To off this select the first option(Aa)

<!-- **************8 -->
3: {s}  dotAll/single line  -> when we use the . in global flag then it match all except \n \r  but , when you ON this flag then it match everthing including \n \r.

<!-- ****************8 -->
4: {u} unicode -> You have to search with the unicode value other-wise latin and greek don't match and cann't able to differentiate which one is greek or latin..

\u{0391} greek(A)
\u{0041} latin(A)

These are also valid
\u0041
\u{41}

but this is not valid
\u41
<!-- ******************** -->
5: {s} sticky ->it match from the starting and again matching from where there is end
eg :hellohellohello -> Here all 3 hello match
eg : hellohellohello -> Here nothing match because in front space comes
eg :hello hellohello -> Here all 1 hello match

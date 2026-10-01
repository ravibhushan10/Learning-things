Quantifiers: Quantifiers in regex specify how many times a character or pattern should match.(in gruop wise)

[a-z]{5} -> it match a-z character with the grouping of 5.
[a-z]{5,} -> it match a-z character with the grouping of 5 or more like (7,8,9,....).
[a-z]{5-10} -> only the range between 5-10 groups


*             0 or more times              a*        "", "a", "aa", "aaa", ...
+             1 or more times              a+        "a", "aa", "aaa", ... (not "")
?           0 or 1 time(optional)          a?        "", "a"
{n}            exactly n times             a{3}      "aaa" only
{n,}           n or more times             a{3,}      "aa", "aaa", "aaaa", ...
{n,m}           b/w n and m                a{3,6}     "aa", "aaa", "aaaa"


ab[0-9]* -> select ab and if any digits comes select it (0 or more times)
   eg:  ab , ab1, ab23,ab...

ab[0-9]+  -> eg(ab1,ab2,ab23,ab3434, ....)

ab[0-9]?  -> (ab, ab2, ab4,ab8, ab9,)  but ab23 , ab567,ab9877 not valid
-> it says after ab 0times  and  1 times any number comes

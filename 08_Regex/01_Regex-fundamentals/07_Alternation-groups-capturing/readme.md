Alternation: it matches with anyone or all.
cat | dog | parrot | monkey

<!-- ************ -->
Grouping: (c|b|r)at  -> match the cat , rat,bat

<!-- ************** -->
verify the date:
\d{2}(-|\/)\d{2}(-|\/)\d{4}  ->wrong
\d{2}(-|\/)\d{2}\1\d{4}  ->right (it say first capturing group me jo match huaa tha vahi match hoga)

22-10-2024
22/12/2023

<!-- ************** -->
Backrefrence -> \1\2  (grouping first and second)

<!-- ******************* -->
Capturing vs non-capturing group

?: -> non-capturing group

(a|b) (d|E) -> Both are capturing group and we can backrefrence like(\1\2)
(?:a|b) (d|E) -> First group is non-capturing group we can't backrefrence like(\1), but in the case of second group we can backrefrence(\2)

-> we can give the name to the capturing group , but not to the non-capturing group
(?<ravi>a|b)
-> And we can backrefrence through the group name \k<ravi>

word boundary(\b)-> match the exact word not in the middle of any word

[A-Za-z0-9_] -> If any character comes from the word in the last and first then it not match

\bcat\b
\bwent\b
matched(cat!, went.)
unmatched(cat_,  cat2, catb, cats, _cat)


<!-- ************** -->
non-word boundray (\B) ->
->[A-Za-z0-9_] -> If any character comes from the word in the last and first then it  match

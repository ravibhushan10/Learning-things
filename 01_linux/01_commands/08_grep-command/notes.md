grep = global regular expression print

<!-- *********-->
grep -w ravi user.csv ravi.txt less.txt   = you can provide the multiple files for searching
grep -l keyword ravi.txt less.txt more.txt  = it prints the only file names the matches the keyword.
<!-- *********-->


<!-- *********-->
grep -ie ravi -e lokesh -e pawan  user.csv        = multiple word search
grep -iE "bank|debt|accountant|mentor" user.csv   = multiple word search 

use "egrep" command
egrep -i "bank|debt|accountant|mentor" user.csv   = multiple word search 
<!-- *********-->


<!-- *********-->
grep name user.txt  = gives the all lines that present name.(by default this is case sensitive)
<!-- *********-->


<!-- *********-->
-i = ignore the case sensitivity
grep -i "keyword" user.txt 
<!-- *********-->


<!-- *********-->
grep -v "keyword" user.txt  = search the everything except the keyword/pattern(gives the output)
<!-- *********-->


<!-- *********-->
grep -f names.txt  user.csv data.csv lenth.csv  = Here it search the all words present in the names.txt in the all files(user.csv, data.csv, lenth.csv) .

eg: names.txt
ravi
raju
pawan
-> it search the all three names in the all filess.
<!-- *********-->


<!-- *********-->
grep ^100 user.csv = it gives you the all lines that id(line number) start with 100.
grep 23$  user.csv = it finds the all lines that id ends with 23. 
<!-- *********-->








<!-- *********-->
grep -c "keyword" user.txt = count the total appereance of the word.
grep -w  "keyword" user.txt= it match the only given word from (\b...\b)


-n   # --line-number     → show line number before each match
-c   # --count           → print count of matching lines only
-l   # --files-with-matches → print only filenames that match
-L   # --files-without-match → print filenames that DON'T match
-o   # --only-matching   → print only the matched part, not the whole line
-q   # --quiet / --silent → no output; just set exit code (used in scripts)


-i   # --ignore-case     → case-insensitive match
-v   # --invert-match    → print lines that DON'T match (invert)
-w   # --word-regexp     → match whole words only (wraps pattern in \b...\b)
-x   # --line-regexp     → match entire line only
-m N # --max-count=N     → stop after N matches


-r   # --recursive        → search all files in directory recursively
-R   # like -r but follows symlinks too
--include="*.js"          → only search files matching this glob
--exclude="*.log"         → skip files matching this glob
--exclude-dir=".git"      → skip this directory
<!-- *********-->



<!-- *********-->
exit status code in linux : 

when you run any command then it leave a integer number(0-255). After that you can check wheather previoius command is runs successfully or not.

cd /home/
echo $?    = 0 (means it is successfully runs)

cd /homebarjkd/
echo $?    = 2 (means error)

0 = successfully runs
1 = general error
2 = syntax error
<!-- *********-->


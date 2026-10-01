<!-- *************************************************************** -->
grep = Global Regular Expression Print {used to find the single word and pattern in a file}

grep [option] [pattern] [file-path]


<!-- ********* -->
grep "mv" rabi.txt            ->print the every line in the file that contain the "mv"
grep "mv" normal/ravi.txt

grep "hello" file1.txt file2.txt file3.txt       -> work with multiple files
<!-- ********* -->


<!-- ********* -->
grep "in" *          -> search the word in all files present in current folder

grep -r "hello" /home/ravi/projects/        -> This search the in the all folder (home, ravi,project and its subfolder also)
<!-- ********* -->



<!-- ********* -->
grep -i "hello" file.txt         -> match the all world(Hello, hello, HELLO,hELLO)
grep -c "hello" file.txt         -> show total count matched word
grep -ni "is" text.html          -> show line number with case insensitive
<!-- ********* -->


<!-- ********* -->
grep -B 2 "is" text.html         -> show the two lines before matching the text
grep -A 2 "is" text.html         -> show the two lines after matching the text

grep -C 3 "error" server.log     -> C=context (print the 3 lines before and after)
<!-- ********* -->


<!-- ********* -->
grep -w "log" file.txt           -> it match the exact word not the sub-word
<!-- ********* -->


<!-- ********* -->
grep "world$" file.txt          -> you can use the regex pattern also
<!-- ********* -->


<!-- ********* -->
cat server.log | grep -i "error"      -> Search server logs for errors only(open server.log file and search only "error" word)
<!-- ********* -->

<!-- *************************************************************** -->






<!-- ***************************** Use case of pip (|) ********************************** -->
| - Pipe Operator

Takes the output of the command on the left and sends it as input to the command on the right.

<!-- ********** -->
command1 | command2
-> Whatever command1 prints — instead of showing it on screen — it gets handed over to  command2 to work with

<!-- ********** -->
ls /etc | grep "host"
<!-- *************************************************************** -->









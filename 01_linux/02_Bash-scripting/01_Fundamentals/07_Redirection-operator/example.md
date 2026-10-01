

<!-- ******** -->
>  = it overwrite the file
>> = it appends the data on file
<!-- ******** -->


<!-- ******** -->
>  output direction
<  input direction
<!-- ******** -->


<!-- *** standard input (stdin - 0)***** -->
cat < first.txt            -> means pass the all data of first.txt to cat is it print on screen

read line > first.txt      -> only take the first line of the first and print of screen
echo $line
<!-- ******** -->



<!-- *** standard output (stdout - 1 )***** -->
ls > list.txt
pwd > list.txt               -> Here we simply saying don't print on the terminal instead of printing redirect to the new file/existing file(list.txt)
echo "hello" > list.txt
<!-- ******** -->


<!-- *** standard error(stderr - 2) **** -->
cd /root/              -> it gives you error permission denied.

cd /root/ >file.txt    -> it not redirect to the file because redirect only redirect the output not the error it will print on screen.

cd /root/ 2> file.txt   -> when error comes then write in this file or redirect.


For the both error and output redirect(&)

ls &> first.txt    -> Here if error or output anything comes it redirect to file
ls &>> first.txt

cmd > out.txt 2>&1  (same as above same work)

<!-- ******* -->





EOF = end of line
<!-- ******* -->
cat << EOF
Hello
This is line two
This is line three
EOF

<< = Here-Document operator — tells the shell "read input until you see the delimiter word on a line by itself." Everything between the opening EOF and closing EOF is treated as the stdin of cat.
<!-- ******* -->

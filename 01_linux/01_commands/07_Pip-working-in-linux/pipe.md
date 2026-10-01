<!-- ********* -->
Pipe (|) = Takes the input of the previous command and gives the output to the next command.
<!-- ********* -->


<!-- ********* -->
ps -ef  = shows the all running process

ls -1   = it shows the all files in one column
wc -l   = word count (it count the all lines)

ls -1 | wc -l  = it counts the all files present in a folder.
<!-- ********* -->


<!-- ********* -->
netstat = Shows all network connections, listening ports, routing tables, and network interface stats on your system. It's like an X-ray of everything happening on your network layer.
<!-- ********* -->


<!-- ********* -->
tee  = it show the output and also store in a file at a same time.

ls | tee ravi.txt | wc -l  = gives the total count of files.
<!-- ********* -->




<!-- ********* -->
Every Linux command ultimately gets its input one of these two ways:
1. Arguments    = stuff you type after the command name
2. Stdin        = data piped in from another command or redirected from a file


commands that takes input from both method : echo, cat, sort, wc, grep, head, tail.

Argument :  rm, mkdir,cp,mv,
Stdin    :  xargs, tee. 
<!-- ********* -->



<!-- ********** -->
xargs = it takes the input from the standard input and provide the as a argument to the next command.

ls | xargs rm -r 
cat ravi.txt | exargs touch 
<!-- ********** -->
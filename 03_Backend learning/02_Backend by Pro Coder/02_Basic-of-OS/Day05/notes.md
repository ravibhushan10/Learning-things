<!-- ************************* -->
All things are written to their priority order
<!-- ************************* -->
Alias: Bash first checks if the command matches any defined aliases.

Functions: Next, it checks if the command matches any defined shell functions.

Built-ins: Then, Bash checks if the command is a built-in shell command (like cd, echo, pwd, etc.).

Hash Table: Bash checks its hash table of previously looked-up executables to quickly locate executables.

Executable Files: Finally, it searches through the directories listed in the PATH environment variable, in the order they appear, to find an executable file matching the command name.
<!-- ************************ -->
which pwd :
:(when output is any "path"  ) it show the executable file of pwd location
<!-- ************************ -->
type pwd 
type ls 
->  it show the command are which type of above five.
<!-- ************************ -->
node ='winpty node.exe'  (this is alias for node)

->when you run node then internally it runs these.(you can also type these whole command)
<!-- *********** hash ************* -->
hash: it store the all previous used path/command for the fast retrieval ,so when you run the any command then it first check in hash then goes for all path
<!-- ************************ -->
To see the all path use:
echo $PATH | tr ":" "\n"
<!-- ************************ -->
read -p "Enter your name: " name
#    │                       └─ variable to store in
#    └─ -p = prompt: show text on same line before waiting

read -s -p "Enter password: " pass
#    └─ -s = silent: hides what user types

read -t 5 -p "Quick! Enter something: " val
#    └─ -t = timeout: stops waiting after 5 seconds

read -n 1 -p "Press any key: " key
#    └─ -n = nchars: reads only 1 character, no Enter needed



<!-- ********* -->
{#variable}     -> it is a length operator, that finds the total length of variable
<!-- ********* -->

<!-- ********* -->
$(date)
$(anything)       -> anythings inside this is treated as a single command and execute it.
<!-- ********* -->

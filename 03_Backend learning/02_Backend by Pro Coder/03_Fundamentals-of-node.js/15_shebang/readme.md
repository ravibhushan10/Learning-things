
<!-- ************ -->
shebang(hashbang{#!})
<!-- ************* -->
command file runs and execute the all code inside the file
<!-- all three are same  -->
1: ./command
2: bash ./command
3: bash command

<!-- ************** -->
when you run any file with   ./"file_name"   then under the hood it runs {bahs "file_name"}

eg:  ./app.js   ./ravi.cpp  ./ravi.py   ./command
     bash app.js   bash ravi.js   bash ravi.py   bash command


<!-- ************** -->
1: #!node
2: #!"give the path"   (path must be without the quotes and space)
2: #!/usr/bin/env node

<!-- ****** run these commands ******** -->
env
/usr/bin/env
/usr/bin/env node

-> So for the shebang : #!path
                        #!/usr/bin/env node (that run my index.js file)

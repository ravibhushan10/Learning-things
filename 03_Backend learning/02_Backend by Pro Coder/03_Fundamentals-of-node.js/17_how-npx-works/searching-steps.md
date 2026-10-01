<!-- ************* -->
Step 1: when package.json is present
         Search for the package.json in current working directory
         searches for the "name" : "vite"  key .  (this is npx vite)
         searches for the "bin" : "index.js"  key . (bin=binary) (execute the this  file entire as it is)

<!-- ************* -->

step 2: when package.json is not present
        searches for the   node_modules\bin\hello  (hello file search)
        and execute this
<!-- *********** -->
-> Here this is giving error because npx try to run this file using the cmd..

npm config get script-shell : when the value is null, npx uses the default shell of OS to execute the files. In case of windows the default shell is cmd..

To set the bash shell :   npm config set script-shell "C:\Program Files\Git\usr\bin\bash"


<!-- ************* -->
step 3 : Search globally
-> C:\Users\ravib\AppData\Roaming\npm\node_modules  (npx search here)

->How to see the global package where install : npm root -g
->  ctrl + click on path in terminal open that files in vs code

<!-- ************** -->
steps 4:
when globally not present then it search on hello package on  npm_cache and npx_cache
-> download from there
<!-- ************** -->
steps 5:
when globally not present then it search on hello package on  npm website...
-> download from there

How to protect the main branch , so anyone not able to push the code into directly main branch , when you aprove the request then he able to push the code.

<!-- ********************** -->
protect your branch , when you added any collabrator to your repo then enable the options

<!-- ***** contribute to open source ********* -->
when you forked the any repo to your own remote github then time to time you need to sync(update) the changes :
1: using the ui of github click the sync changes
2: using the cmd:
   (i) git remote add "base" "url"  -> firstly connect your local to owner repo...
   (ii) git fetch base
  (iii) git merge base/main

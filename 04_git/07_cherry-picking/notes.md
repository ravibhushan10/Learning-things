If you want to pick some (only specific work) form the another branch then you have to pick some changes... without the merging the branch into the current main branch ....


Then here we used the cherry picking
git cherry-pick "commit id"


<!-- *************** Gitignore file ************ -->
it is used to , escape the tracking system from git for any files.

<!-- ******** Two command in one time ********** -->
git commit -m "message" && git push -> it do the commit and push the code into the github also.

<!-- ************** -->
if you want to ignore  the git history of any file then use:
git rm --cached "file-name"

if you want to ignore  the git history of any folder then use:
git rm --cached -r "folder/"   (-r means recursive go the inside folder for all files)

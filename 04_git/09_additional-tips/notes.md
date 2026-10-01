<!-- ***** remove from the staging area ************** -->
git restore --staged .  -> remove all the files from the staging area to working directory
git restore --staged "file name" -> for single file

<!-- ************ recover deleted file ************** -->
git checkout "commit id" file-name  -> go to deleted commit and pick the id and use 

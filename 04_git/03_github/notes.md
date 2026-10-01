most of the company used to save the local work to the cloud use Github(80%), and rest of the most big tech gaints use Bitbucket(with jira).

<!-- ******************* -->
git branch -m "new branch"  -> Rename the existing branch

<!-- ******* Check the url of remote *********** -->
git remote show origin
git remote -v

<!-- ********* connect local repo with remote *********** -->
git remote add origin "url"

<!-- **************** -->
First time we use to push : git push --set-upstream origin main   (push your main branch into the github)
                                        -u = --set-upstream
After first time use: git push

git push -u origin master : push the your local master branch into github


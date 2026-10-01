<!-- ******************* -->
git fetch : To fetch the all data of remote to local (but you local is behind from the origin, so you have to take your local with origin so use below command)

git merge origin/main : choose the (origin/main -> your remote origin branch)


git pull : git fetch + git merge  -> don't use this this is not best
<!-- ******************** -->
git fetch origin main     # Only fetch the main branch
git log origin/main       # Review changes
git merge origin/main     # Merge it

<!-- ************************* -->
git checkout main         # Switch to your local main branch
git fetch origin          # Get all remote updates
git merge origin/main     # Update your local main with remote main

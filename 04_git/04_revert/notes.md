It is recomended that don't change (rewrite) the history of git if you already pushed the code into the github, but in your own local repo you can change the history and rewrite the commit.

<!-- ******************** -->
If you don't pushed the code into the github,then use the revert(rewrite) the history
It has three mode :

(hard also delete the all commit between your starting and actual commit id you want to go )

1: hard (it delete the commit history and also delete from the working directory and staging area)
git reset --hard "commit id" -> where you want to point the head(you want to reach) jaha aapko jana hai.

2: soft (delete commit history, present in working directory, present in staging area)
git reset --soft "commit id"

3: mixed (delete commit history , present in working directory, present in modify)
git reset "commit id"
git reset --mixed "commit id"  (both are same)

<!-- ********When your code pushed to remote (revert)******!-->
Revert: it create the new commit with modified version keeping the old commit.

If you pushed the code into the github then use this :revert
git revert "commit id" -> jis commit ko revert karna hai uska commit id.

<!-- ******************** -->
you can revert one by one each commit or use the range query
git revert head~3..head~0   -> here 3 is not included all 0-2 commits are reverted and created  three new commit for each one.

<!-- ************************** -->
If you want to summarize the all range revert into the single commit then:
git revert --no-commit head~3..head~0  -> all three changes put into the staging area

then you have two option: abort and continue
git revert --abort -> if you want all things are normal don't want any change
git revert --continue  -> all three revert done and created one single commit

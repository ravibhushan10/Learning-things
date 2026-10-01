 get a conflict ONLY when:
Same file, same line(s) are changed by both people
<!-- ****************** -->
You do NOT get a conflict when:

Different files are changed
Same file, but different lines are changed

<!-- ****************** -->
After accepting incoming/current/both changes you have to manually add and commit , because every merge create a new commit.

<!-- ****************** -->
At the time of git pull when you get the merge conflict and you don't want to solve at that time or your partner is not avilable then use:  git merge --abort

and start working ......

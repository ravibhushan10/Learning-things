when you are working in any branch and suddenly you need to work on another branch but you current work is not finished then.

if you checkout to new branch without saving the work then your work is gone , and at that time you  also not commit because feature is not implemented fully.

so  at this time we stash our current work and then go to another branch.

git stash -m "our work is pending"
<!-- ******************* -->
to see all stash work : git stash list

tash@{0}: WIP on main: 6b0738e merge
tash@{1} WIP on main: 6b0738e merge
<!-- ****************** -->
to apply the stash work : git stash apply "index"   (like 0,1,2)
to apply all stash work : git stash apply 
<!-- ****************** -->
after apply the stash if delete the stash : git stash drop "index"
for all stash delete : git stach clear

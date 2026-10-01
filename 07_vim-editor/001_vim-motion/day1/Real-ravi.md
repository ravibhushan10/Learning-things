===========================
Command count motion
============================
<!-- ************ -->
b  = backward  move word one by one (put the cursor to the first char of the word)
w  = Forward move word one by one  (put the cursor to the first char of the word)
<!-- ************ -->


<!-- ************ -->
8k   = it goes to 8 times up from the current cursor line 
10k  = 10 times up from the 

6j   = moves 6 times down form the current line
10j  = moves 10 times down form the current line
<!-- ************ -->
=====================================================

<!-- ********** -->
dd  = delete the single line
u   = to undo the deleted line(imediately)
ctrl + r  = redo 
<!-- ********** -->


<!-- ********** -->
d3k   = delete the (current + 3 lines) above
d3j   = delete the (current + 3 lines) below
<!-- ********** -->


<!-- ********** -->
dw   = delete the cursor to next of the word
db   = delete the cursor to back of the word

dw — "delete from here, going forward" → cursor position is included
db — "delete from here, going backward" → cursor position is the boundary, not included

d2w  = delete 2 words in forward
d2b  = delete 2 words in backward(cursor char not included)
<!-- ********** -->


<!-- ********** -->
i  = go to insert mode and word written to the left side of the cursor
a  = go to insert mode and word written to the right side of the cursor
<!-- ********** -->



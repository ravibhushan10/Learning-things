<!-- ************* -->
works only in normal mode : 

$ = moves the cursor to last char of line horizontally
_ = moves the cursor to first char of line horizontally
0 = moves the cursor to first char of editor or identation.
<!-- ************* -->


<!-- ************* -->
I  = goes to start of line but in insert mode
A  = goes to end of the line but in insert mode

o  = make a new line below and go to insert mode
O  = make a new line above and go to insert mode
<!-- ************* -->


<!-- ************* -->

<!-- ************* -->



d$ = delete the all things of line(cursor to right all )
d_ = delete the all things of line(cursor to left all )



<!-- ************* -->
f(  = goes to the forward put the cursor on '('
F(  = goes to the backward put the cursor on '('

T(  = goes to the backward , but not on char.
t(  = this goes to upto but not on char.
<!-- ************* -->



<!-- ************* -->
fe;;;;; = goes to all 'e' one by one in forward 
fe,,,, = goes to all 'e' one by one in backward
<!-- ************* -->


<!-- ************* -->
df(  = This will delete the all things in forward from current postion of cursor to '(' . 
dt(  = This will delete the all things from backward current postion of cursor to '(' . 
<!-- ************* -->


<!-- ************* -->
y = yank(copy)
v = visual mode enter

yf(  = copy after cursor char to 'f' char (included)
vtr  = visual upto r , r not included.

p = paste after cursor
P = paste befre cursor

or choose the word by (b,w, /search, G)

-> This work in both forward and backward direction (F, T)
<!-- ************* -->


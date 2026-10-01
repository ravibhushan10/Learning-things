
================================================================
                        VIM ALL MODES
================================================================

----------------------------------------------------------------
1. NORMAL MODE (Default Mode)
----------------------------------------------------------------
Enter: Press Esc from any mode

h           Move left
l           Move right
j           Move down
k           Move up
w           Jump to next word
b           Jump to previous word
gg          Go to top of file
G           Go to bottom of file
dd          Delete entire line
yy          Copy (yank) entire line
p           Paste below
u           Undo
Ctrl + r    Redo
x           Delete character under cursor

----------------------------------------------------------------
2. INSERT MODE
----------------------------------------------------------------
Enter from Normal mode:

i           Insert before cursor
I           Insert at beginning of line
a           Insert after cursor
A           Insert at end of line
o           Open new line below and insert
O           Open new line above and insert
s           Delete character and insert
S           Delete entire line and insert

Exit: Press Esc

----------------------------------------------------------------
3. VISUAL MODE
----------------------------------------------------------------
Enter from Normal mode:

v           Character-by-character selection
V           Line-by-line selection
Ctrl + v    Block/column selection

After selecting:

d           Delete selected text
y           Copy selected text
c           Change (delete + enter Insert mode)
>           Indent selected lines
<           Un-indent selected lines
~           Toggle case of selected text

Exit: Press Esc

----------------------------------------------------------------
4. COMMAND MODE
----------------------------------------------------------------
Enter: Press : from Normal mode

:w          Save file
:q          Quit
:wq         Save and quit
:q!         Force quit without saving
:wq!        Force save and quit (Vim-level only)
:set nu     Show line numbers
:set nonu   Hide line numbers
:%s/old/new/g   Replace all occurrences
:10         Jump to line 10
:help       Open Vim help manual

Exit: Press Esc

----------------------------------------------------------------
5. REPLACE MODE
----------------------------------------------------------------
Enter: Press R from Normal mode

Overwrites existing text character by character as you type.

Example:
  Before:  Hello World
  Type:    Bye
  After:   Bye   World  (overwrites H, e, l)

Exit: Press Esc

----------------------------------------------------------------
6. EX MODE
----------------------------------------------------------------
Enter: Press Q (capital Q) from Normal mode

Older batch/scripting command mode.
Stays in command loop until you exit.

Exit: Type  visual  or  vi  and press Enter

================================================================
                     MODE SUMMARY TABLE
================================================================

Mode        Enter With        Purpose
--------------------------------------------------------
Normal      Esc               Navigate, delete, copy, paste
Insert      i a o s O A I S   Type and edit text
Visual      v V Ctrl+v        Select text visually
Command     :                 Save, quit, settings, replace
Replace     R                 Overwrite text
Ex          Q                 Batch/scripted commands

================================================================
                      GOLDEN FLOW
================================================================

Normal --(i)--> Insert --(Esc)--> Normal
Normal --(v)--> Visual --(Esc)--> Normal
Normal --(:)--> Command --(Enter)--> Normal

Normal mode is always the HOME BASE.

================================================================





<!-- ******* -->
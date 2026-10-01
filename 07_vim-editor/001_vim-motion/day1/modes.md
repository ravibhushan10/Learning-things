================================================================
                     QUICK REFERENCE
================================================================

Mode            How to Enter        Status Bar
--------------------------------------------------------
Normal          Esc                 -- NORMAL --
Insert          i / a / o / s       -- INSERT --
Visual          v                   -- VISUAL --
Visual Line     V                   -- VISUAL LINE --
Visual Block    Ctrl + v            -- VISUAL BLOCK --
Command         :                   bottom bar opens
Replace         R                   -- REPLACE --

================================================================
                    GOLDEN FLOW IN VS CODE
================================================================

Open file  -->  NORMAL MODE (default)
    |
    i  -->  INSERT MODE  -->  Esc  -->  NORMAL
    v  -->  VISUAL MODE  -->  Esc  -->  NORMAL
    :  -->  COMMAND MODE -->  Esc  -->  NORMAL
    R  -->  REPLACE MODE -->  Esc  -->  NORMAL

================================================================
                    IMPORTANT NOTES
================================================================

1. Ex mode (Q) is NOT supported in VSCodeVim.

2. 'ctrl + ['   works well to escape from the any modes to normal mode .like Esc to exit any mode.

3. VS Code shortcuts (Ctrl+S, Ctrl+Z) still work
   even when Vim extension is active.

4. If Vim mode feels stuck, just press Esc 2-3 times
   to get back to Normal mode safely.

5. You can temporarily disable Vim mode anytime:
   Bottom right corner of VS Code --> click Vim --> Toggle

================================================================
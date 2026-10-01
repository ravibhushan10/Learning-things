Linux stored the file in different way.

inode   = the actual data + metadata (permissions, size, timestamps). Stored on disk. Has a unique number.
filename  just a human-readable label pointing to that inode.Like a pointer.

<!-- ********* -->
Inode 467  = means in disk it stored in 467 location but for human redable use the file name like ravi.txt that point to this inode.
<!-- ********* -->
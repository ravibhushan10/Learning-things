rename : (oldpath, newpath)
-> This method is used to both rename and move
<!-- ************88 -->
copyFile : (source , destination) -> you can just copy the file not the directory
cp: (source, destination)  -> for copy the directory

<!-- ***** Delete ******* -->
fs.unlink()  -> for file delete(fs.rm())
fs.rm(src, {recursive:true}) -> delete with content directory
fs.rmdir() -> for empty dir delete


<!-- *********** -->
fs.stat()

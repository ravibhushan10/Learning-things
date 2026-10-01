<!-- *********** -->
scp = secure copy protocol
-> send the file from the one server to another server both are linux.

It is a cli-tool that help to transfer the files between the two server using the SSH key.
<!-- *********** -->


<!-- *********** -->
Remote location       ->             server

make sure in server your username and password set, i.e. your are also registered as a user.
Then you able to send the file from the remote location.

scp "local path or file"  "username"@"id address":"destination path"

scp first.txt  ravi@127.23.12.34:/temp/
<!-- *********** -->


<!-- *********** -->
server   -> Remote location

scp user@server_ip:/path/on/server/file.txt   /path/on/local/
scp user@server_ip: first.txt second.txt third.txt    /path/on/local/

<!-- *********** -->


<!-- *********** -->
LOCAL → REMOTE:
scp file.txt user@ip:/remote/path/

REMOTE → LOCAL:
scp user@ip:/remote/path/file.txt /local/path/

FOLDER upload:
scp -r myfolder/ user@ip:/remote/path/

FOLDER download:
scp -r user@ip:/remote/path/myfolder/ /local/path/

WITH KEY:
scp -i key.pem file.txt user@ip:/remote/path/
<!-- *********** -->

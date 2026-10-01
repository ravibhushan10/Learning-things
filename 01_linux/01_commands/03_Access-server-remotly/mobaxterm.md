mobaxterm is a free software terminal that includes very high and rich functionality.

<!-- ************ -->
ipconfig     -> in Windows to check ip address
ip addr      -> in linux to check the ip address
<!-- ************ -->



<!-- ************ -->
To enable the remote access(give the enable access) you have to install the one service on your server.

sudo apt install openssh-server    -> this  is service you have to download
systemctl start ssh                -> enable this service
systemctl status ssh               -> check the status
<!-- ************ -->



<!-- ************ -->
SSH is a system protocol to connect the two computer and communicate through internet. Like the FTP/SFTP , telnet, HTTPS/HTTP

hostname             -> This gives you the hostname of your machine or  server(renamed of ip address)
hostname -I          -> gives ip address in number.
<!-- ************ -->



<!-- ************ -->
Connect with cmd, gitbash and other terminal

ssh rabi@"ip address"    -> This is best option
ssh ravi@"hostname"
<!-- ************ -->

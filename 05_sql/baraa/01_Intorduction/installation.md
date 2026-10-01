sudo apt update
sudo apt install mysql-server


sudo systemctl status mysql : check the status of the mysql
sudo systemctl enable mysql : if the service is not enable then enable it 
sudo systemctl start mysql  : start the service

sudo systemctl stop mysql 
sudo systemctl disable mysql  : if the service is enable then disable.

<!-- ***** mysql shell ******* -->
sudo apt install mysql-shell

mysqlsh -u root -h 127.0.0.1 -P 3306
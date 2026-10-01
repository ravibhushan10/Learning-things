CREATE TABLE IF NOT EXISTS users(
id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(40) NOT NULL,
 age VARCHAR(40) NOT NULL,
 date_of_birth DATE,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 ); 

<!-- *******************  -->
SHOW STATUS:  run in workbench
<!-- *******************  -->
to select the table:->
SELECT * FROM users;
<!-- ********View table structure***********  -->
DESCRIBE employees;
-- or
SHOW COLUMNS FROM employees;


<!-- *********Interaction with the CMD ******** -->

1: mysql -u root -p  :  it connect to mysql server
2: status   : it shows the all information about your connection
3: use mysql ;
4: show tables;
5 : describe table_name;

<!-- to delete the database -->
DROP DATABASE ravi;
DROP DATABASE IF EXISTS ravi;



mysql workbench is a graphic tool to interact with Mysql server .

-- 1. Create the database
CREATE DATABASE school_management;

-- 2. Use the database
USE school_management;

-- 3. Create a table
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Create another table
CREATE TABLE courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    instructor VARCHAR(100)
);

-- 5. Show all tables in the database
SHOW TABLES;

-- 6. View table structure
DESCRIBE students;

<!-- ******************* -->

2: CREATE DATABASE database_name;
3: SHOW DATABASES;
4: USE database_name;  (work with(select) that database)
<!-- ******************* -->
DROP TABLE IF EXISTS employees;
<!-- ******************* -->
Delete a database:->  
DROP DATABASE database_name;
DROP TABLE table_name;
<!-- ******************* -->
check current database: 
SELECT DATABASE();
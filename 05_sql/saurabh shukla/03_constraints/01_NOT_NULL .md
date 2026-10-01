use like :
name INTEGER NOT NULL, : when you try to insert the data without provide the name then it won't accept throw the error.
<!-- ********************** -->
-> by default a column can hold NULL.
-> NOT NULL constraint enforce a column to not accept NULL values.
-> Inserting a new rocord or updating a record without adding a value to a NOT NULL feild is not possible .

<!-- ********* Add NOT NULL constraints ************* -->
There is two way to insert the NOT NULL constraints in any column 
1: add during the creation of the table

2: use the ALTER command to modify the constraints in existing table , but the any value not should be NULL present then we apply the NOT NULL constraints
-> ALTER TABLE student
    MODIFY  COLUMN  age INT  NOT NULL;
<!-- *********** Remove NOT NULL constraints **************** -->
->ALTER TABLE student
  MODIFY  COLUMN  age INT;

<!-- *************************** -->

use like :
name INTEGER NOT NULL, : when you try to insert the data without provide the name then it won't accept throw the error.
<!-- ********************** -->
-> by default a column can hold NULL.
-> NOT NULL constraint enforce a column to not accept NULL values.
-> Inserting a new rocord or updating a record without adding a value to a NOT NULL feild is not possible .

<!-- ********* Add NOT NULL constraints ************* -->
There is two way to insert the NOT NULL constraints in any column 
1: add during the creation of the table

2: use the ALTER command to modify the constraints in existing table , but the any value not should be NULL present then we apply the NOT NULL constraints
-> ALTER TABLE student
    MODIFY  COLUMN  age INT  NOT NULL;
<!-- *********** Remove NOT NULL constraints **************** -->
->ALTER TABLE student
  MODIFY  COLUMN  age INT;

<!-- *************************** -->

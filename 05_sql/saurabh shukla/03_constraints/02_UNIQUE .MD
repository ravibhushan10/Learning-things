 First way to add the UNIQUE constraints 

 create table student (
    roll INT  UNIQUE ,
    name VARCHAR(50) NOT NULL,
 );
 <!-- ********************* -->
 Second way: 
  create table student (
    roll INT ,
    name VARCHAR(50),
    age INT,
    phone BIGINT,
    <!-- by this  -->
    UNIQUE (roll, phone)
  );

  <!-- *********** Name your constraints ************************* -->
  create table student (
    roll INT ,
    name VARCHAR(50),
    age INT,
    phone BIGINT,
    <!-- by this  -->
    CONSTRAINT  constraint_name  UNIQUE (roll, phone)
  );

<!-- ***************************************************   -->
  If table is already built , then you want to add UNIQUE constraints 
<!-- ***************************************************   -->
ALTER TABLE table_name
ADD UNIQUE  (colname);

ALTER TABLE table_name
ADD CONSTRAINT constraint_name  UNIQUE (col_name); 

<!-- Remove the unique constraints in existing table -->
ALTER TABLE table_name;
DROP INDEX constraint_name;
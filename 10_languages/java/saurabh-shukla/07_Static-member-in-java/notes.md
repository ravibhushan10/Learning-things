Inside the function , does not contain any static variable but class can contain.

<!-- **** In java *** -->
static member variable
static member function
not static variable in method
but we can have static inner class

<!-- **** Instance variable ****** -->
int x;
instance variable : whenever any object is created then this variable present in that object. For each object this variable is different.

-> create every time for each object.


<!-- **** static variable ****** -->
static int y;
static member variable : This is not available inside any object like 'x'. This is available only for the class.

-> it has only single copy for the whole class and does not depend on the any object.
-> it by default initialized to its default value(0).


<!-- **** static function ****** -->
-> static function can only access the static member(static variable) of same class.

-> It is invoked using the class name and dot operator.



<!-- *** Use case ** -->
For account class :

balance, account_number,phone_number : make these as normal variable, because for every customer this is different.

ROI, Branch_name : make this static because for all customer this is same, so don't waste memory make a single copy for entire class.

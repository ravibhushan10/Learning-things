access modifier: access modifiers are keywords that control the visibility/accessibility of the class . like method,variable, and constructor.

Java supports the 4 access modifier :
private
protected
public
default : if you don't write the 3 keyword then it by default treated as "private" in the C++, but in java it treated as a default.
-> for default don't need to write default keyword.




<!-- ************************ -->
we use the access modifier in the class declaration also. This is new things in Java to use access modifier in the class.

public class Employee { }   // accessible from any package
class Employee { }          // default — accessible only within same package

but in c++ we don't use the access modifier in the class declaration we only use for the inheritance.





<!-- ************* Inner vs outer class *********** -->

class OuterClass {          // outer class
    class InnerClass {      // inner class — defined INSIDE OuterClass
    }
}

-> outer class only : public or default type
-> inner class : all 4 types access modifier



<!-- **************************** -->

There is only one public outer class in a single java file.The file name is as public class name.but we have the multiple public inner class.
-> Only public class can be accessed outside the package.
<!-- **************************** -->





<!-- **************************** -->
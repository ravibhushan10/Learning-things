Java is a case sensitive language.
Java is nearly 100% object oriented language.
In java Every piece of code must live inside the class.

<!-- ************ -->
you can't create the function outside of any class, you have to create within any class.
-> but in c++ we can create in both outside or in class.

<!-- ************ -->

For the public class file name and class name should be same.

-> but when the our outer class is default(non-public class) then file name could be anything.

<!-- ************ -->

You can create the class inside the class.

1: outer class -> its access specifier must be "public or  default"
 eg:
     public class hellworld  -> public
     class hellworld         -> default


2: inner class -> its access specifier could be anything "public, private, protected, default".



<!-- ****** compiling and running of java program ******* -->

-> for compiling
1: javac "file_name.java" -> this makes the ".class" file

-> for running
1: java "file_name"   -> without any extension.


<!-- ****************** -->
System.out.println(...) — 

System is a built-in Java class. out is a static field inside System of type PrintStream, representing the standard output stream (your console/terminal). println = "print line" — it prints the argument and then moves the cursor to a new line.


public static void main(String[] args) — 

The entry point of any standalone Java program. The JVM (Java Virtual Machine) looks specifically for a method with this exact signature to start execution.
public — must be accessible from outside the class (the JVM calls it externally).
static — means it belongs to the class itself, not to any object. This lets the JVM run it without creating an object first.
void — returns nothing.
String[] args — an array of String (full form: this holds command-line arguments passed when running the program, e.g., java Test arg1 arg2).
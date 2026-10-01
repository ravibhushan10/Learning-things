public class ravi{
    int x; //instance(object) variable
 static int y; //static member variable

 public void fun1(){}  //instance member function
 public static void fun2(){
   y=30;
    System.out.println("static function is called");

 }  //static member function

 static class Test{  //static inner class
   public static String country="INDIA";
 }


 public static void main(String[] args){
    ravi r1= new ravi();
    ravi r2= new ravi();

   //  when class.variable  then it is static variable
    System.out.println(ravi.y);

   //  access static function
    ravi.fun2();

   //  access static class
   System.out.println(ravi.Test.country);
 }

}

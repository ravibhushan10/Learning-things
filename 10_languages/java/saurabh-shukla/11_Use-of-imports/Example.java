package pack1;
import pack2.Student;  //import single class
// import pack2.*;  //import all classes
public class Example{
    public static void main(String[] args){
      Student s1=new Student();
      s1.setRoll_no(100);
      s1.setName("Ravi");

      System.out.println(s1.getRoll_no());
      System.out.println(s1.getName());
    }
}

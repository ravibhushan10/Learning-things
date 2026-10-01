public class Test{

    private int a,b,c;

    // Here you can use the any 4 access modifiers according to the visibility 
    // all though you can use of main() or any normal function also use these 4 access modifiers a/c to visibility.
   public Test(){
        a=10;
        b=20;
        c=30;
    }
    void value(){
        System.out.println(a + "," + b + "," + c);
    }
    public static void main(String[] args){
       Test t1=new Test();
       t1.value();
      
    }
}
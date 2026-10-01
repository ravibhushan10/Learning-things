public class Box{
    public static void main(String[] args){
        System.out.println("Hello Constructor");
        System.out.println(args[0]+ args[1]);
    }

    private int l,b,h;

    public Box(){
        l=10;
        b=20;
        h=30;
        System.out.println("Called");
    }

}
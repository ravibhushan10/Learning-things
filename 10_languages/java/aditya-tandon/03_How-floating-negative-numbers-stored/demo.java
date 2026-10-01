public class demo{
    public static void main(String[] args){

        // print()  = without a new line
        System.out.print("Hello ");
        System.out.print("World");


        // println()  = print with new line
        System.out.println("Hello ");
        System.out.println("World");

        //printf()  = print the formatted output
        float a=0.7f;
        float b=8.125f;
        System.out.printf("%.10f%n",a);  //0.6999999881  not actual its close
        System.out.printf("%.10f%n",b);  //8.1250000000  actual value
    }
}

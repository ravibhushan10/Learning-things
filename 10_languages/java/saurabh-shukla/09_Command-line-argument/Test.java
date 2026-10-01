public class Test{
    public static void main(String[] args){
        // System.out.println("First argument "+ args[0]);
        // System.out.println("Second argument "+ args[1]);


        // for(int i=0;i<args.length;i++)
        // System.out.println(args[i]);

        int s=0;
        for(int i=0;i<args.length;i++)
        s=s+Integer.parseInt(args[i]);
        System.out.println("The sum is : "+ s);

    }
}

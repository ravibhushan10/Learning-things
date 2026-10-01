public class loop{
    public  static void main(String[] args){

        /* why you not write short,byte inside the loop it takes less memory
        ans:-> by default compiler type promote the type into (int,long).
         */

        for(int i=0;i<10;i++)
            System.out.println(i);



        /*while loop = used for the menu selection items
        play game
        return saved game
        exit
         */
        int i=0;
        do{
                System.out.println(i);
                i++;
        }while(i<=10);
    }
}

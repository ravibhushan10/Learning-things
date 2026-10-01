public class Ravi{

    public static void main(String[] args){
        Integer i1= Integer.valueOf("23");  //Integer pass as an string and return the reference of the object
        Double d1= Double.valueOf("3.14");

        int a =Integer.parseInt("123");  // pass valid convertable argument and it convert into int and return.
        double b =Double.parseDouble("34.35");

        // to get the actual data from the object
        int x= i1.intValue();
    }
}

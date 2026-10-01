public class Array{
    public static void main(String[] args){
        int [] arr=new int[5];   //But java prefer this one
        int arr2 []=new int[5];  //this is also supported

        for(int i=0;i<arr.length;i++){
            arr[i]=10;
        }
        // arr[6]=10;   Error: index out of Bound exception.


        // Array is a object so it has a method(length) in java but not in the c++.
        for(int i=0;i<arr.length;i++){
            System.out.println(arr2[i]);  //By default it has "0", in c++ it has Garbage value
        }
    }
}

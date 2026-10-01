class Box{
    private int length,breadth,height; //instance member variables
    public void setDimensions(int l,int b, int h){  //both functions is an instance member functions, because we need the object to call this function
        length=l;
        breadth=b;
        height=h;
    }
    public void showDimensions(){
        System.out.println("L="+ length);
        System.out.println("B="+breadth);
        System.out.println("H="+ height);
    }
}
class Example{
    public static void main(String[] args){
        Box smallBox=new Box();
        smallBox.setDimensions(10,20,30);
        smallBox.showDimensions();
    }
}

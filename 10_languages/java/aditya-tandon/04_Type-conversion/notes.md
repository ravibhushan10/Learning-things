Type conversion :
1: Widening (Implicit / Automatic)
2: Narrowing (Explicit / Manual Casting)

<!-- *** Implicit conversion ***** -->
Smaller data type → Larger data type
No data loss
No cast required
byte → short → int → long → float → double

  eg: byte -> int
      int -> bigint

-> This is called **"Widening conversion"** ..


<!-- ******** -->
Explicit conversion :

int i=300;
byte b;
b=i;
<!-- b= (data type)i; -->
b=(byte)i;

<!-- *** Formula ** -->
b= i % (range of data type)

b= 300 % 256(2^8);
b = 44



<!-- *********** Automatic type promotion *********** -->
converts the data type during the intermediate calculation.

byte a=40;
byte b=50;
byte c=100;

int i = (a*b)/c   //here the result of a*b not stored in byte so it promoted automatic to int so our calculation will perform



but ;

byte b=50;
b=b*2;  //here compiler automatic firstly promoted the type into int, now we get    int 100 which is not store to byte data type so it give the error..

->  to correct do the type casting
 b= (btye) b*2;

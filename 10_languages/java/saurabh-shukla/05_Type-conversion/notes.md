Down grading of type is not possible in Java.but Upgrading is possible.

byte->short->int->long   (possible)
<!-- ************** -->
widening conversion: means values wide own range(bada karegin apne aap ko ).

int y=3;
float x=y;    widening conversion, No error (int upgraded into float, no data loss)
x=3.0

<!-- ******** -->
narrowing conversion: means values reduce own size.

float x=3.4  (double)
float x=3.4f  (float)
int y=x;    narrowing conversion, error

int y=(int)x     No error(using typecasting) but data loss

float k=3.4      error, we are trying to put the double value(8 bytes) in float(4 bytes)
float k=3.4f     no error

"""
HCF=highest common factor

factor: Factors are numbers that divide the any number completely(no remainder)
eg:
   12 = 1,2,3,4,6,12 (factors)

   12/1=12
   12/2=6
   12/3=4
   12/4=3
   12/6=2
   12/12=12


multiple : Multiples are the result of multiply a number by integer
eg:
   12= 12,24,36,48,60,72 ....

"""

"""
LCM=least common multiple

1: Find the multiple of 4
2: Find the multiple of 6

4   6
8   12
12  18
16  24
20  30
24  36
28  42
32  48
36  54
40  60
44  66
48  72

-=> Here the all common multiple(exist in both table 4 and 6)
  12,24,36,48 ......


Hence LCM(4,6)=12


# Formula
 max(a,b)<= lcm(a,b) <= (a*b)

"""

print("Enter the two number:")
a=int(input())
b=int(input())

L= a  if a>b else b

while(L<=a*b):
   if L%a==0 and L%b==0 :
     print("LCM is:",L)
     break
   L+=1

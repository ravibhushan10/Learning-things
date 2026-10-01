l1=[2,3,3,5,6,4,3]
l2=[True,"ravi",3,3.3, 3+3j,343]
l3=[]

print(type(l1))
print(l1)
print(l1[3],l1[-4])


print(type(l2))
print(l2)
print(l2[0])

print(type(l3))
print(l3)


"""
important
list has the dual indexing
-7 -6  -5   -4  -3  -2  -1
10, 20, 30,  40, 50, 60, 70
0   1   2    3   4   5   6
"""


for i in l1:
    print(i,end=' ')

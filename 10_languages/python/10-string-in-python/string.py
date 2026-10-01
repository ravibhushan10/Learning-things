str1="ravi"
print(type(str1))   # <class 'str'>
print(str1[-2])
# print(sum(str1))   this is error because it accepts only int
print(sorted(str1))    #['a', 'i', 'r', 'v']


"""
sorted(str1)

sorted()  always return the "list" object , whether you are passing the any type of object in argument
"""

str2=str([1,2,3,4,5,6,7])
print(str2)   #here each character is a string(number, space ,  comma )
print(str2[-5])
for a in str2:
    print(a, end=" ")

print(help(str))

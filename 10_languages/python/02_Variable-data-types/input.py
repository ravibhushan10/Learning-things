"""
-> input() can take at most one argument.
-> it always return the 'str' type value.
-> it takes input form the keyboard
-> you can use conversion function to get the input data into the desired type

"""

print("enter your name",end=':')
x=input()
print(x)
print(type(x))  #<class 'str'>


name=input("Enter your name:")
print(name)


# Type conversion
"""
6+"6" : error

str(6)+"r"
'6r'
4+int("5")
9


int(),float(), complex(), bool(), str(),
bin() : find the binary of number
oct():
hex():
ord(): find the unicode of character
chr(): find the character of unicode


x=input("Enter the first number:")
first=int(x)
y=input("Enter the second number:")
second=int(y)
print("The sum is :",first+second)
"""


x=int(input("Enter the first number:"))

y=int(input("Enter the second number:"))

print("The sum is :",x+y)

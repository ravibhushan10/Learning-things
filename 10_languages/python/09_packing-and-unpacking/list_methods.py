l1=list()  #create a list empty object when you give empty parenthesis
print(l1)


# l0=list(10,20,30)   multiple argument is not valid
# l2=list(10)       this is error, because argument must be iterable object here int is not a iterable

l2=list([10,20,30])   #this is valid because array is iterable object
print(l2)




# Repetition operator
l5=[2,5]
l6=l5*3   #it copy the whole value 3 times    [2, 5, 2, 5, 2, 5]
# l6=l5*3.5   this not multiply because it only works with int
print(l5)
print(l6)



# list of list (works same as 2d array)
list3=[[1,2,3],[4,5,6],[6,8,9]]

print(help(list))










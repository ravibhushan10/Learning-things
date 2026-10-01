list1=[2,3,"ravi"]

# unpacking

a,b,c = list1  #every values from the list goes to one by one in the variables, but the no of variables and the size of list should be same in both left and right side


#packing

str1="ravi"
ravi="lokesh"
ka="kjsdf"
list2=[str1,ravi,ka]

for i in list1:
    print(i,end=' ')
for i in list2:
    print(i,end=' ')



li=[2,3,4,5,6,32,21,43,1,21]
print(len(li))
print(sum(li))
print(min(li))
print(max(li))
l5=(sorted(li)) #it not modify the original list(items){it returns the new list} , but in c++ sort() function modify the original array

for i in l5:
    print(i,end=' ')

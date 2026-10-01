l1=[2,3,"ravi","location",4.5]
print(l1)
l1[2]="lokesh"
print(l1)

# Adding the elements
l1.append("suraj")   #append last to the list
l1.insert(0,20)     #insert the at any specific position
l1.extend([50,500]) #insert the multiple value at the end
l1=l1+['pawan','bushan','lokioe']   #insert using the + operator
print(l1)

# slicing
l2=l1[1:5]
l2=l1[1:]
l2=l1[:1]
l2=l1[::2]  #every second elements
print(l2)



# Removing elements
l1.remove("location")  #remove the first occurrence elements
l2=l1.pop()    #pop last elements
l1.clear()  #delete all elements

# del - delete by index or slice
del l1[0]
del l1[1:3]
print(l1)

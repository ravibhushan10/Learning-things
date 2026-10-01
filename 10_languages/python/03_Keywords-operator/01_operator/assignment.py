"""
a=10,b=20,c=29  This is error in python
"""

# Both left and right side no. of values should be same
a,b = 23,45
print(a,b)



# important : when you create the multiple variables with the same value in right side then python don't create the extra object in heap it just copy the value of one present object to the all same value variable

name1="ravi"
name2="ravi"
name3="ravi"
""" all are pointed to the same object, means only one 'ravi' created in heap
 Here the refrence_count of "ravi" is 3
 -> When refrence count of any object is 0 then it is a garbage value , removed by the python ..
"""
print(id(name1))   #address '1830223540592'
print(id(name2))
print(id(name3))



#Identity operator
x="lokesh"
y="lokesh"
print(x is y)  #if the id in both x and y is same then true otherwise false
print(x is not y)  #opposite result


#membership operator (apply only on iterable)
"""
not-iterable= int,float,complex,bool
iterable=str,list,tupple,range,dict,etc
x in y = Here y should be iterable
"""

name="ravi bhushan"
print("rav" in name)  #true
print("r2v" in name)  #false

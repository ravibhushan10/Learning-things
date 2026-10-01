# create the tuple object

t1=(1,2,3)
t2=()   #empty tuple(you can assign the value in tuple because it is immutable)
print(t1)
print(type(t1))



# both are same with int class
t3=(10)
t3=10

print(type(t3))  #<class 'int'>


# create the tuple of single Value
t4=(10,)
print(type(t4))  #<class 'tuple'>   you have to put the comma at the end


# without parenthesis also is a tuple (using concept of packing)
t5=1,2,3,4
print(type(t5))

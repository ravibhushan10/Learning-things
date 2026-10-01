'''
r=range(beg,end,step)

1:range(1,         10,       1)
     include  exclude    common gap

2: range(end)    , By default beg=0, step=1
3: range(beg,end)  By default step=1
'''

r=range(1,10,1)
print(r)

for e in r:
    print(e)

"""
x=int(input("Enter the number:"))
r=range(1,x+1,1)
for i in r:
    print(i)
"""
x=int(input("Enter the number:"))

for i in range(1,x+1,1):
    print(i)

"""  syntax
[expression  for i in iterable]

-> this expression is independent, it execute how many times it dependents on the iterable object
"""

l1=[a+1 for a in range(5)]
print(l1)     #[1, 2, 3, 4, 5]

l2=[3+4 for i in range(8)]
print(l2)     #[7, 7, 7, 7, 7, 7, 7, 7]


oddNumbers=[int(print("enter the number"))]

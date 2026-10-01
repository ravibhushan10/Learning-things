a=4>3>2  #true (it check individual like 4>3 and 3>2) but in c/c++ 1>2 (false)
print(a)


print(3>1 and 3<8)
print(3>1 or 3<8)
print(not 0)  #true
print(not 0>4)  #true
print(not -18)  #false (and positive and negative value)


"""
important concept(Logical operator)
-> If our operand is bool type then it result is bool type(True,False)
eg:  3>4 and 4>0  (False)
     0==0 or 3==3 (True)

-> But when operand is not a bool type then result is depend on the
eg:  'ravi' and "lokesh"  (empty string{False} , non-empty string{True})
                         -> Here both operand is "str" type so our result also str type and its depend on the oeprator (here overall result depend on the last operand so ans=lokesh)
     "ravi" or "lokesh"  (ravi)
     3 and 4 (4)
     3 or 4  (3)

    4 and "ravi"  (ravi)
"""

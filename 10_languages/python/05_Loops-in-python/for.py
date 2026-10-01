"""
for variable in  iterable-sequence
  code
  code
"""
import pyjokes
jokes=pyjokes.get_joke()
print(jokes)


# it only apply on iterable(range, dict, tupple,list)
name="Ravi Bhushan"
for i in name:
    print(i,ord(i))

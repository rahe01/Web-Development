class Max:
    def __init__(self , a,b,c):
        if((a>b) and (a>c)):
            print('a is max')
            
        elif((b>c)):
            print('b is max')
            
        else:
            print('c is max')
            
a = int(input('A : '))
b = int(input('B : '))
c = int(input('C : '))
eq = Max(a,b,c)
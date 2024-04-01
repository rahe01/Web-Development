class Triangle :
    def __init__(self , a,b,c):
        import math
        if((a+b) >c and (b+c) >a and (a+c) >b):
            s= (a+b+c)/2
            area = math.sqrt(s*(s-a)* (s-b)*(s-c))
            print (area)
            
        else:
            print("Not possible")
            
            
a = float(input('a'))
b = float(input('b'))
c = float(input('c'))

eq= Triangle(a,b,c) 
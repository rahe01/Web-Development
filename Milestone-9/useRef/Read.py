def read():
    with open('File.txt' , 'r') as f1: 
        data = f1.read()
        
    count_capital = 0
    count_small = 0
    count_digit = 0
    
    for ch in data:
        if ch.isupper():
            count_capital += 1
        elif ch.islower():
            count_small += 1
        elif ch.isdigit():
            count_digit += 1
            
    print('Capital letters : ' , count_capital)
    print('Small letters : ' , count_small)
    print('Digits : ' , count_digit)
read()
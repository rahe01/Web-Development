def InputFunction():
    
    f1 = open('File.txt' , 'w')
    line1 = input('Enter 1st line :')
    line2 = input('Enter 2nd line :')
    line3 = input('Enter 3rd line :')
    
    new_line = '\n'
    
    f1.write(line1)
    f1.write(new_line)
    f1.write(line2)
    f1.write(new_line)
    
    f1.write(line3)
    f1.write(new_line)
    
    f1.close()
    
InputFunction()
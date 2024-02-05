
# def program2():
#     f = open("MyFile.txt", "w")
#     line1 = input("Enter the line 1 text:")
#     line2 = input("Enter the line 2 text:")
#     line3 = input("Enter the line 3 text:")

#     new_line = "\n"

#     f.write(line1)
#     f.write(new_line)
#     f.write(line2)
#     f.write(new_line)
#     f.write(line3)
#     f.write(new_line)
#     f.close

# program2()


# def programe2():
#     f = open("MyFile.txt" ,"w")

#     line1 = input ("Enter 1st line :")
#     line2 =input ("Enter 1st line :")
#     line3 =input ("Enter 1st line :")

#     new_line = "\n"

#     f.write(line1)
#     f.write(new_line)
#     f.write(line2)
#     f.write(new_line)
#     f.write(line3)
#     f.write(new_line)

#     f.close()

# programe2()


# def programe4():

#     with open("MyFile.txt", "r") as f1:

#         data = f1.read()

#         count_capital = 0
#         count_small = 0
#         count_digit = 0

#         for ch in data:
#             if ch.islower():
#                 count_small +=1

#             if ch.isupper():
#                 count_capital +=1

#             if ch.isdigit ():
#                 count_digit +=1

#     print("Total number of capital letter :" , count_capital)
#     print("Total number of small letter :", count_small)
#     print("Total number of digit :",count_digit)

# programe4()


def programe4():

    with open("MyFile.txt", "r") as f1:
        data = f1.read()

    capital =0
    small =0
    digit =0

    for ch in data:
        if ch.isupper():
            capital +=1

        if ch.islower():
            small +=1

        if ch.isdigit():
            digit +=1

    
    print("Upper case is ", capital)
    print("Lower case is ", small)
    print ("Digit is ", digit)

programe4()

# Basic - Print all integers from 0 to 150.
# Multiples of Five - Print all the multiples of 5 from 5 to 1,000
# Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo".
# Whoa. That Sucker's Huge - Add odd integers from 0 to 500,000, and print the final sum.
# Countdown by Fours - Print positive numbers starting at 2018, counting down by fours.
# Flexible Counter - Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, print only the integers that are a multiple of mult. For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines)

def basic():
    for i in range(0,151,1):
        print(i)


#basic()

def multiples_of_five():
    a = 0

    for i in range(0,1000,1):
        a=i*5
        if(a==1000):
            print(a)
            break
        print(a)

#multiples_of_five()

def counting_the_dojo_way():
    for i in range(1,101,1):
        if i%5==0 and i%2==0:
            print("Coding Dojo")
        elif i%5==0:
            print("Coding")
        else:
            print(i)

# counting_the_dojo_way()

def whoah():
    a=0
    for i in range(0,500000,1):
        if i%2==1:
            a+=i
    print(a)

#whoah()

def byFours():
    for i in range(2018,0,-4):
        print(i)
#byFours()

def flexible(lowNum, highNum, mult):
    for i in range(lowNum, highNum+1, 1):
        if (i%mult==0):
            print(i)

        

        
#flexible(2,9,3)

#1
def a():
    return 5
print(a())
# expected: 5

#2
def b():
    return 5
print(b()+b())
# expected:10

#3
def c():
    return 5
    return 10
print(c())
# expected:5

#4
def d():
    return 5
    print(10)
print(d())
# expected:5

#5
def e():
    print(5)
x = e()
print(x)
# expected:5 undefined
# real: 5 none

#6
def f(b,c):
    print(b+c)
print(f(1,2) + f(2,3))
# expected:3 5 none
# real: 3 5 error from NoneType

#7
def g(b,c):
    return str(b)+str(c)
print(g(2,5))
# expected:'25'

#8
def h():
    b = 100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7
print(h())
# expected:100 10

#9
def i(b,c):
    if b<c:
        return 7
    else:
        return 14
    return 3
print(i(2,3))
print(i(5,3))
print(i(2,3) + i(5,3))
# expected:14 7 21

#10
def j(b,c):
    return b+c
    return 10
print(j(3,5))
# expected:8

#11
b = 500
print(b)
def k():
    b = 300
    print(b)
print(b)
k()
print(b)
# expected:500 500 300 300
# real: 500 500 300 500 

#12
b = 500
print(b)
def l():
    b = 300
    print(b)
    return b
print(b)
l()
print(b)
# expected:500 500 300 500 b in the function is isolated to the function, and doesn't affect the class variable b

#13
b = 500
print(b)
def m():
    b = 300
    print(b)
    return b
print(b)
b=m()
print(b)
# expected:500 500 300 300

#14
def n():
    print(1)
    b()
    print(2)
def b():
    print(3)
n()
# expected: 1 3 2

#15
def o():
    print(1)
    x = b()
    print(x)
    return 10
def b():
    print(3)
    return 5
y = o()
print(y)
# expected:1 3 5 10

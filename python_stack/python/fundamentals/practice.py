myList = ("a", "b", 5, 4, 3, "d", 'e', "c")
myDictionary = {
    "item": "cup",
    "number of items": 5,
    "shop": "Sue's",
    "Customers": 25
}
for i in range(0, len(myList), 1):
    print(myList[i])

for var in myList:
    if isinstance(var, str) == True:
        print(var+str(5))
        if var is "c":
            print(var+"this is c")
        if var is myList[len(myList)-1]:
            print(var+str(10)+"this is the last value in my list")
    else:
        print("this was a number")

print('\n')

y = 5
while y>0:

    print(y)
    y-=1
else: #while loops can have else clauses
    print("you've reached the end of y")

print('\n')

def functionthing():
    if 1:
        for values in myDictionary.values():
            # the variable 'values' stays outside of the for loop and only in the object scale that it's enclosed in so in this case, the function
            print(values)

        for key, vals in myDictionary.items():
            print(key, " = ", vals)

    for keys in myDictionary.keys():
        if keys == 'shop':
            continue
        print(keys)

    print(values+1)


functionthing()

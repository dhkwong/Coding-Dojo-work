# 1.
x = [[5, 2, 3], [10, 8, 9]]
students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'}
]
sports_directory = {
    'basketball': ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer': ['Messi', 'Ronaldo', 'Rooney']
}
z = [{'x': 10, 'y': 20}]
x[1][0] = 15

sports_directory['basketball'][1] = 'Bryant'
students[0]['last_name']='Bryant' #last name specifically calls last name key at 0'th index or the first dict
sports_directory['soccer'][0] = 'Andres'
for item in z:
    if item["y"] == 20:
        item["y"] = 30
print(x)
print(students)
print(sports_directory)
print(z)

#2.
students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
def iterateDictionary(students):
    for key in students:
        print(f"{key} ")    
iterateDictionary(students) 


#3.
def iterateDictionary2(key_name, some_list):
    lst=[anydictionary[key_name]for anydictionary in some_list]
    return lst

print(iterateDictionary2('first_name', students))

#4.
dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def printInfo(mydict):

    for key in mydict:
        print(len(mydict[key])) #when you iterate i in array/list, you get the INDEX. when iterating in dictionaries, you get the KEY
        print(key)
        for i in range(0,len(mydict[key])): #iterate through length of array at key since len is for lists
            print(mydict[key][i]) #iterate through the values at the particular key with index i incrementing for the list
        
printInfo(dojo)



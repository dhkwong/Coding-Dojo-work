class User:
    def __init__(self, username, emailaccount): #constructor, NEEDS self and __init__
        self.name=username
        self.email=emailaccount
        self.account_balance=0


    def payday(self, value):
        self.account_balance+=value
        print("$",self.account_balance)

    def name_change(self, name):
        self.name=name
        print(self.name)


daryl=User("daryl", "test") #self passes on all the info of the class, methods, and values of the instance. self basically carries all the info
daryl.payday(500)
daryl.name_change("daryl2")
print(daryl.name, daryl.email, daryl.account_balance)
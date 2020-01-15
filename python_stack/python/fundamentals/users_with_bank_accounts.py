from bank_account import BankAccount
class User:
    def __init__(self, name='daryl'):
        self.name = name
        self.account1=BankAccount()
        self.account1.accountname=(name+"'s account1")
        self.account2=BankAccount()
        self.account1.accountname=(name+"'s account2")

    def make_deposit(self, amount, accountname):
        if accountname==self.account1.accountname:
            self.account1.balance += amount
        elif accountname==self.account2.accountname:
            self.account2.balance += amount
        else:
            return "Not a valid account"
        return self

    def make_withdrawal(self, amount, accountname):
        if accountname==self.account1.accountname:
            self.account1.balance -= amount
        elif accountname==self.account2.accountname:
            self.account2.balance -= amount
        else:
            return "Not a valid account"
        return self

    def display_user_balance(self):
        print(self.account1.balance, self.account2.balance)
        return self
daryl=User()
daryl.make_deposit(100,"daryl's account2").make_withdrawal(100,"daryl's account2").display_user_balance()
class BankAccount:
    def __init__(self, int_rate=1.04, balance=800, accountname=""):
        self.int_rate = int_rate
        self.balance = balance
        self.accountname=accountname
        

    def deposit(self, balance):
        self.balance += balance
        return self

    def withdraw(self, balance):
        self.balance -= balance
        return self

    def display_account_info(self):
        print(self.int_rate, self.balance)
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance *= self.int_rate 
        return self


account1=BankAccount()
account2=BankAccount()

account1.deposit(100).deposit(100).deposit(100).withdraw(100).yield_interest().display_account_info()
account2.deposit(100).deposit(100).withdraw(100).withdraw(100).withdraw(100).withdraw(100).yield_interest().display_account_info()

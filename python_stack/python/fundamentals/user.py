class User:
    def __init__(self, name, amount):
        self.name = name
        self.amount = amount

    def make_deposit(self, amount):
        self.amount += amount
        return self

    def make_withdrawal(self, amount):
        self.amount -= amount
        return self

    def display_user_balance(self):
        print(f"User: {self.name}, balance: ${self.amount}")
        return self

    def transfer_money(self, other_user, amount):
        self.amount -= amount
        other_user.amount += amount
        return self


daryl = User('daryl', 500)
person2 = User('person2', 300)
person3 = User('person3', 500)

daryl.make_deposit(100).make_deposit(100).make_deposit(
    100).make_withdrawal(100).display_user_balance


person2.make_deposit(100).make_deposit(
    100).make_withdrawal(100).display_user_balance


person3.make_deposit(400).make_withdrawal(100).make_withdrawal(
    100).make_withdrawal(100).display_user_balance()


daryl.transfer_money(person3, 200).display_user_balance()
person3.display_user_balance()

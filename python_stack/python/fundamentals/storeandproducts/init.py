from store import *
from product import *

store1 = Store("store1")
apple = Product("apple", 100, "fruit")
orange = Product("orange", 100, "fruit")

store1.add_product(apple).add_product(orange)
orange.print_info()




from product import Product


class Store:
    def __init__(self, name):
        self.name = name
        self.productList=[]

    def add_product(self, new_product):
        product=Product(new_product.name, new_product.price, new_product.category)
        self.productList.append(product)
        return self

    def sell_product(self, id):
        self.productList[id].printinfo()
        self.productList.pop(id)
        return self

    def inflation(self, percent_increase):
        for i in self.productList:
            self.productList[i].update_price(percent_increase, True)
            return self
    def set_clearance(self, category, percent_discount):
        for i in self.productList:
            self.productList[i].update_price(percent_discount, False)
        return self


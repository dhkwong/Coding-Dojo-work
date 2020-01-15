class SLNode:
    def __init__(self, val):
        self.value = val
        self.next = None


class SList:
    def __init__(self):
        self.head = None

    def add_to_front(self, val):
        new_node = SLNode(val)
        current_head = self.head
        new_node.next = current_head
        self.head = new_node
        return self

    def print_values(self):
        runner = self.head
        while(runner != None):
            print(runner.value)
            runner = runner.next
        return self

    def add_to_back(self, val):
        if self.head == None:  # checks for edge case where list is empty, aka head of list is None
            self.add_to_front(val)
            return self

        # if there is a list, then point to each node until the node pointed at's NEXT node points to None(null in java) aka is empty.
        new_node = SLNode(val)
        runner = self.head
        while(runner.next != None):
            runner = runner.next
        # last node in list linked/points to new_node created in the beginning
        runner.next = new_node
        return self

    def remove_from_front(self):
        if self.head == None:
            print("nothing to remove, list is empty")
            return self
        self.head = self.head.next
        return self

    def remove_from_back(self):
        if self.head == None:
            print("nothing to remove, list is empty")
            return self
        if self.head.next == None:
            self.head = None
            return self
        runner = self.head
        while(runner.next.next != None):
            runner = runner.next
        runner.next = None
        return self

    def remove_val(self, val):
        if self.head == None:
            print("nothing to remove, list is empty")
            return self
        runner = self.head
        while(runner.next.value != val):
            runner = runner.next
            if runner.value == None:
                print("value does not exist in this linked list")
                return self
        runner.next = runner.next.next
        return self

    # uses index location and new node will be AT the location specified
    def insert_at(self, val, location):
        counter = 1
        if self.head == None:
            self.head = SLNode(val)
            return self
        new_node = SLNode(val)
        runner = self.head
        while(counter < location):
            counter += 1
            runner = runner.next  # we go to the location

            if runner == None:
                print("This location is out of bounds of the linked list")
                return self
        new_node.next = runner.next
        runner.next = new_node
        return self


Slst = SList().add_to_front(7).add_to_front(5).add_to_front(
    3).add_to_back(8).add_to_back(6).print_values()
print("\n")
# Slst.remove_from_front().print_values()
# print(Slst.head.value)
# Slst.remove_from_back().print_values()
# Slst.remove_val(7).print_values()
#Slst.insert_at(23, 2).print_values()

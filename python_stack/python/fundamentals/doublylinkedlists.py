class DLNode:
    def __init__(self, value):
        self.value=value
        self.next=None
        self.prev=None

class DList:
    def __init__(self):
        self.head=None
        self.tail=None
        # add a new node to the end of the list,
    def insert_at_end(self, val):
        new_node=DLNode(val)
        if self.tail==None:
            self.head=new_node
            self.tail=new_node
            return self
        else:
            self.tail.next=new_node
            new_node.prev=self.tail
            self.tail=new_node
            return self
        # delete an existing node,
    def delete_node(self, val):
        if self.tail.value == val:
            self.tail.prev=self.tail
            self.tail.next=None
            return self
        if self.tail.value == val:
            self.head.next=self.head
            self.head.prev=None
            return self
        runner = self.head
        while (runner.value != val):
            if runner == None:
                print("the value doesn't exist in this doubly linked list")
                return self
            runner=runner.next
        runner.next.prev=runner.prev
        runner.prev.next=runner.next


        # insert a node between existing nodes (eg. before a given value, at a certain index, etc.)
    def insert_at(self, val, indexposition):
        counter = 1
        new_node=DLNode(val)
        if self.head==None:
            self.head=new_node
            self.tail=new_node
            return self
        runner=self.head
        while(counter<indexposition):
            runner=runner.next
            counter+=1
            if runner==None:
                print("the location given is out of bounds of the linked list")
                return self
        new_node.next=runner.next.next
        new_node.prev= runner
        runner.next=new_node
        new_node.next.prev=new_node
            
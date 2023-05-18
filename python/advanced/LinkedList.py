from attr import dataclass
from typing import Self, cast


@dataclass
class Node:
    data: int
    next: Self | None


class Iterator:
    """Adapter for iterating"""

    def __init__(self, ls):
        self.cur = ls.head

    def __iter__(self):
        return self

    def __next__(self):
        if self.cur.next == None:
            raise StopIteration
        self.cur = self.cur.next
        return self.cur.data


class LinkedList:
    def __init__(self):
        init = Node(0, None)
        self.head = init
        self.tail = init
        self.count = 0

    def __iter__(self):
        return Iterator(self)

    def __len__(self):
        return self.count

    def __str__(self):
        cur = self.head.next
        ret = "[ "
        for elem in self[:-1]:
            ret += str(elem) + ", "

        ret += str(self.tail.data)
        ret += " ]"
        return ret

    def __getitem__(self, key: slice | int) -> list[int]:
        try:
            # https://stackoverflow.com/questions/22151335/implementing-getitem
            # assume `key` is a slice object
            key = cast(slice, key)
            ret = []
            cur_i = 0
            cur = cast(Node, self.head.next)

            start, stop, step = key.indices(self.count)

            for i in range(start, stop, step):
                while cur_i < i and cur.next != None:
                    cur = cast(Node, cur.next)
                    cur_i += 1
                ret.append(cur.data)
            return ret

        except AttributeError:
            # key is number~
            key = cast(int, key)
            if key < 0:
                # if idx == -1 => self.count - 1
                key = self.count - key

            cur = self.head
            for _ in range(key):
                cur = cast(Node, cur.next)

            return [cur.data]

    def append(self, data):
        new_node = Node(data, None)
        cast(Node, self.tail).next = new_node
        self.tail = new_node
        self.count += 1

    def pop(self) -> int | None:
        """remove node from `tail`"""
        if self.count == 0:
            return None

        cur = self.head
        ret = self.tail
        while cast(Node, cur).next != self.tail:
            cur = cast(Node, cur.next)
        # cur now previous of tail
        self.tail = cur
        self.tail.next = None
        self.count -= 1

        return ret.data

    def find(self, data) -> int | None:
        """find index from matching data of nodes, if not found, return None"""
        if self.count == 0:
            return None

        for idx, elem in enumerate(self):
            if elem == data:
                return idx

        return None


l = LinkedList()
l.append(90)
l.append(80)
l.append(70)
l.append(60)
l.append(50)

print("len:", len(l))

print("\n[DEBUG]--> next chaining start:")
print(l.head.data)
print(l.head.next.data)
print(l.head.next.next.data)
print(l.head.next.next.next.data)
print(l.head.next.next.next.next.data)
print(l.head.next.next.next.next.next.data)
try:
    # error squiggle을 없애고 싶다
    print(l.head.next.next.next.next.next.next.data)
except AttributeError:
    print("No more elements!")

print("\n[DEBUG]--> __str__ dunder method check:")
print(l)

print("\n[DEBUG]--> __iter__ dunder method check:")
for data in l:
    print(data)

print("\n[DEBUG]--> find")
assert 0 == l.find(90)
assert 1 == l.find(80)
assert 2 == l.find(70)
assert 3 == l.find(60)
assert 4 == l.find(50)

print("\n[DEBUG]--> pop")
assert 50 == l.pop()
assert 4 == len(l)
assert 60 == l.pop()
assert 3 == len(l)
assert 70 == l.pop()
assert 2 == len(l)
assert 80 == l.pop()
assert 1 == len(l)
assert 90 == l.pop()
assert 0 == len(l)
print(l)

# cast는 타입체크를 전혀 하지 않는구나...
# some_none_value = None
# node = cast(Node, some_none_value)
# node.data

print("\[DEBUG]--> indexing with int")
l = LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(4)
l.append(5)
l.append(6)

print(l[0])
print(l[1])
print(l[2])
print(l[3])
print(l[4])
print(l[5])
print(l[:])
print(l)
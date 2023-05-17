---
aliases: 
tags: 
created: 2023-05-11T11:00:29
updated: 2023-05-11T18:03:56
---
어디까지 했더라

# Class 이어하기

## Inheritance re

아쉽게도, 상속을 하는 *이유*에 대하여 설명이 조금 부족했던 것 같기도 하다. 파이썬에서의 상속도 Java, C++등 다른 OOP 언어들의 패러다임을 그대로 가지고 있겠지? 잠만... 파이썬에는 인터페이스가 없나?

- [?] 파이썬에는 인터페이스가 없나? 그냥 모든 것을 덕타이핑으로 처리하나??? 
	- [그렇다](https://stackoverflow.com/a/372121). 정말 대단한 언어군. 인터페이스랍시고 구현체가 없는 새 클래스를 만들어 docstring으로 열심히 문서화 하면 그것이 인터페이스라고 한다.......

상속은 전에 확인했을 때 부모 클래스의 클래스 attr를 상속받는다고 했다. 하지만 인스턴스 attr은 상속받지 않는다. 다만, 애초에 파이썬의 인스턴스 attr의 개념이 다른 언어랑은 확연하게 다른지라... 그냥 코에 걸면 코걸이 식으로 된다고 이해하자.

## Linked List

이거 공부할 때만 해도 이터레이터를 배우지 않아서 걍 `next` 체이닝 했다. 이번엔 `LinkedList` 객체와 그 이터레이터 만들 수 있을지도!

==TODO== : [[Linked List in python]]

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
    
    def link_to(self, next):
        self.next = next


노드1 = Node(10)
노드2 = Node(20)
노드3 = Node(30)

노드1.link_to(노드2)
노드2.link_to(노드3)
노드3.link_to(노드1)


print(노드1.data)
print(노드1.next.data)
print(노드1.next.next.data)
print(노드1.next.next.next.data)
```

## Method Overriding

정의: 부모에게서 상속받은 attr를 같은 이름으로 재선언하여 사용하는 것.

## Multiple Inheritance and `mro` builtin function

https://www.geeksforgeeks.org/method-resolution-order-in-python-inheritance/

그거아시져, 마름모꼴로 생긴 상속관계에서 최하단의 클래스가 어느 부모의 attr를 따라야 하는지 충돌이 발생하는 경우 아주 곤란해진다고.
![[다중상속.excalidraw]]

하지만 파이썬에서는 아주 이상한 방식으로 다중상속 문제점을 해결했고, (좋은 건지는 모르겠지만) 다중상속이 허용된다. 바로 MRO (Method Resolution Order)에 근거한 원칙에 의해 다중상속이 들어가 있더라도 메서드 이름을 찾아가는 데 가장 가까운 관계의 클래스 우선 탐색한다.

`mro`는 `object`의 메서드로, 출력해보면 나의 모든 조상을 리스트의 형태로 출력한다. 그래서 attr 충돌 발생시 `mro`의 왼쪽에서부터 가장 가까운 클래스의 attr를 따라갈 수 있다...

## Private Attributes

클래스 밖에서 **문법적으로** 접근이 불가능한 프라이빗한 변수를 만들 수 있다. 이름 앞에 `__`만 붙이면 끝임.
```python
class Car(object):
    __maxSpeed = 300
    maxPeople = 5
    def move(self, x):
        print(x, '의 스피드로 움직이고 있습니다.')
        print(self.__maxSpeed, '가 최고 속도입니다.')
    def stop(self):
        print('멈췄습니다.')

k5 = Car()
k5.move(10)
# k5.__maxSpeed #error
k5.maxPeople
```

# Iterator

https://realpython.com/introduction-to-python-generators/

원칙:
1. `__iter__`를 구현하여야 한다. 이 매직 메서드 안에 순회를 위한 인덱스라던가 이것저것을 초기화 하는 코드를 넣으면 좋습니다. 
2. `__iter__`는 반드시 `__next__` 매직 메서드를 구현한 객체를 리턴하여야 한다.
3. `__next__` 메서드는 컨테이너의 끝에 도달하는 등 순회가 끝났을 때 반드시 `StopIteration` 에러를 일으켜야만 한다.

예제로 `range` 비스무리한 커스텀 이터레이터를 만들어보자.
```python
class MyIterator:

    def __init__(self, stop):
        self.currentValue = 0
        self.stop = stop

    def __iter__(self):
        return self

    def __next__(self):
        if self.currentValue >= self.stop:
            raise StopIteration
        result = self.currentValue
        self.currentValue += 1
        return result

my_iterator = MyIterator(5)

for i in my_iterator:
    print(i)
```

under the hood...
1. `for`가 `__iter__`를 호출한다. 내부적으로 초기화 작업을 수행한다.
2. 순회를 하면서 `__next__`를 호출한다. 이때 이터레이터는 내부 상태를 바꾸는 작업을 수행한다.

### `iter`, `next` builtin functions
그냥 `iter` 는 `__iter__`를 실행시켜 이터레이터 오브젝트를 반환받고, `next`는 이터레이터의 상태를 변화시고 결과값을 받아낸다.

```python
my_iterator = MyIterator(5)
it = iter(my_iterator)
print(it)
print(next(it))  # 0
print(next(it))  # 1
print(next(it))  # 2
print(next(it))  # 3
print(next(it))  # 4
print(next(it))  # raise StopIteration
```

### Unpacking Iterators

순회를 굳이 하지 않고, 몇개의 원소들을 임의로 분해(혹은 언팩)할 수 있다. 이건 좀 좋은데?
```python
a, b, c, d, e = MyIterator(5)
print(a, b, c, d, e)
```

### Generator which generates iterator-like control block

`yield` 문법이 나온다. `yield` 키워드를 가지고 있는 함수를 generator function이라고 부른다. 함수를 suspend 하고 `generator` 객체를 리턴하는 역할을 가지고 있다. 따라서 함수의 상태가 어딘가 저장이 되고 재호출이 되기를 기다린다. 해당 함수가 외부에서 다시 호출이 되면 `yield` 이후 문장들을 다시 실행하기 시작한다. 

`yield`를 사용하여 리턴한 `yield` 객체로부터 데이터 뽑아내려면 `next` 내장 함수를 사용하자. 완전 이터레이터와 사용방법이 동일하지? 
```python
def my_yield():
    print('<my_yield> before yield')
    yield 1
    print('<my_yield> after yielding 1')
    yield 2
    print('<my_yield> after yielding 2')
    yield 3
    print('<my_yield> after yielding 3')

generated = my_yield()
print(next(generated))  # 1
print(next(generated))  # 2
print(next(generated))  # 3
print(next(generated))  # raise StopIteration
```

`my_yield` 함수에 대한 호출은 마치 리스트로부터 `iter`를 호출한 것 마냥 새로운 제너레이터 객체를 리턴하는 것 같다. 그래서 멍청하게 `my_yield`를 여러 번 호출했다가 잠깐 멘붕에 빠졌다.
```python
print(next(my_yield()))  # 1 
print(next(my_yield()))  # 1 
print(next(my_yield()))  # 1 
print(next(my_yield()))  # 1 
print(next(my_yield()))  # 1 
print(next(my_yield()))  # 1 
...
```

나중에 멀티스레딩과 네트워크 프로그래밍과 함께 하면 복잡하게 얽혀 고오급 프로그래머가 될 수 있다.

아래 코드는 무한루프에 걸린다.
```python
def gen():
	count = 0
	while True:
		yield count
		count += 1

for i in gen():
	print(i)
```

아래 코드는 무한한 짝수 정수를 게으르게 다루는 법에 대한 스니펫이다. `gen()`은 분명히 무한하지만 `zip`과 함께 사용하여 바운딩이 된다!
```python
def gen():
    count = 0
    while True:
        yield count
        count += 2


l = [10, 20, 30, 40, 50]
print(list(zip(l, gen())))
```

# Decorator

오늘 진도 엄청나게 많이 뺐네

정의:
	데코레이터는 함수의 기능을 확장하기 위해 만들어졌으며, 페이로드를 정제하는 일, 함수 호출 앞/뒤로 무언가 해야할 일이 있을 때 요긴하게 사용된다.

먼저 실무에서 데코레이터를 어떻게 쓰는지 확인해보자.
```python
@login
def 비밀게시판():
	"""
	함수를 실행하기 전에 로그인 여부를 조사한다.
	"""
	return render()

@preprocess
sum([10, '', '20', '30', None, 'hello'])
# 숫자만 정제하여 `sum`에게 넘겨주는 일을 `@preprecess`가 하게 된다.
```

데코레이터는 사실 함수인데, 함수를 인자로 받아 함수를 리턴하는 이상한 녀석이다. 이것도 전략패턴이라고 봐야할까? 얘의 `wrap_func`를 잘 보면 안에서 `func`를 호출하는데 이녀석이 바로 데코레이터를 붙인 함수이다.
```python
# Decorator 선언
def print_hello(func):
    def wrap_func():
        print("func <<print_hello>>::<<wrap_func>>")
        func()
    return wrap_func

# Decorator 호출
@print_hello
def func1():
    print('inside <<func1>>')

func1()

# Decorator 없이도 못할 건 없는데...
def func2():
    print('func <<func2>>')

print_hello(func2)()
```

# 모듈

==TODO==

# 파일 입출력

==TODO==


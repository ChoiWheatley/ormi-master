"""
https://pyalgo.co.kr/?page=6#
"""
from enum import Enum, auto

class Ingredient(Enum):
    Bread = 1
    Egg = 2
    Bacon = 3
    Vegitable = 4
    ERROR = auto()


def expect_mapper(score: int) -> Ingredient:
    '''return: next expectation'''
    match score:
        case 0:
            return Ingredient.Bread
        case 1:
            return Ingredient.Egg
        case 2:
            return Ingredient.Bacon
        case 3:
            return Ingredient.Vegitable
        case 4:
            return Ingredient.Bread
        case _: 
            return Ingredient.ERROR
        

def solution(data):
    # stack의 점수는 0점부터 시작한다. expect와 일치하는 재료가 나올 경우 top의 
    # 점수를 1 증가 시킨다.
    score_stack = [0]
    expect = Ingredient.Bread 
    cnt = 0
    MAX_SCORE = 5

    for ingredient in [Ingredient(x) for x in data]:
        if expect != ingredient:
            score_stack.append(0)
        # expectation satisfied
        score_stack[-1] += 1
        if score_stack[-1] == MAX_SCORE:
            cnt += 1
            score_stack.pop()
            if len(score_stack) == 0:
                score_stack.append(0)
        expect = expect_mapper(score_stack[-1])

    return cnt

# def test_eq(lhs, rhs):
#     assert lhs == rhs

# test_eq( 1 , solution([1,2,3,4,1,1,2,3,4]))
# test_eq( 2 , solution([1, 1, 1, 2, 3, 4, 1, 2, 3, 4, 1]))
# test_eq( 0 , solution([1, 2, 3, 4, 2, 3, 4, 1]))
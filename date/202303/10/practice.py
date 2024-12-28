from collections import deque

n, e = map(int, input().split())
puzzle_deque = deque()
anwser_list = list()

for i in range(n):
    puzzle_deque.append(list(map(int, input())))


#start : [0][0]  right L [0][1] down : [1][0] top : [-1][0]
#두가지 큐를 추가하고/ 답을 anwser에 넣는다.

def rltb_check(param1, param2):
    re_list = list()
    puzzle_deque[param1][param2]
    #right
    if param2 < e and puzzle_deque[param1][param2 + 1] == 1:
        re_list.append(puzzle_deque[param1][param2 + 1])


    #left
    #top
    #bottom

    return 0


def DEQUE(param):
    rltb = rltb_check()


    return 0

print(rltb_check(0,0))
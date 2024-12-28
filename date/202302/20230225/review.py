#Baekjoon 11286
"""
from queue import PriorityQueue
import sys

input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
priority_queue = PriorityQueue()

if n == 0:
    print(str(0))

for i in range(n):
    q = int(input())
    if q != 0:
        priority_queue.put((abs(q),q))
        continue
    elif priority_queue.qsize() == 0:
        print(str(0) + '\n')
        continue
    else:
        print(str(priority_queue.get()[1]) + '\n')
"""
#Baekjoon 1874

import sys
input = sys.stdin.readline

n = int(input())
answer_list = [0] * n

for i in range(n):
    answer_list[i] = int(input())

stack = [0]
num = 1
answer = ""
check = True

while True:
    if len(answer_list) == 0:
        break
    if stack[-1] != answer_list[0]:
        if answer_list[0] < stack[-1]:
            check = False
            break
        else:
            answer += "+\n"
            stack.append(num)
            num += 1
            continue
    elif stack[-1] == answer_list[0]:
        del answer_list[0]
        answer += "-\n"
        stack.pop()
        continue

if check:
    print(answer)
else:
    print("NO")







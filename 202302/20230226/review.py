#Baekjoon 1874

import sys
input = sys.stdin.readline

n = int(input())
answer_list = [0] * n

for i in range(n-1, -1, -1):
    answer_list[i] = int(input())

stack = [0]
num = 1
anum = n -1
answer = ""
check = False

while True:
    if len(answer_list) == 0:
        check = True
        break
    if stack[-1] != answer_list[anum]:
        if answer_list[anum] < stack[-1]:
            check = False
            break
        else:
            answer += "+\n"
            stack.append(num)
            num += 1
    elif stack[-1] == answer_list[anum]:
        answer_list.pop()
        anum -= 1
        answer += "-\n"
        stack.pop()
if check:
    print(answer)
else:
    print("NO")
#백준 11720문제 정답
# jupyter
#백준 1546 문제 정답
# jupyter
#백준 11659 문제
"""
import sys

input = sys.stdin.readline
n, s_n = map(int, input().split())
n_list = list(map(int, input().split()))

s_list = [0]

for i in range(n):
    s_list.append(s_list[i] + n_list[i])

for i in range(s_n):
    a, b = map(int, input().split())
    print(s_list[b] - s_list[a-1])
"""

#백준 2164 문제
"""
from collections import deque
n = int(input())
n_list = deque()
for i in range(n):
    n_list.append(i + 1)

while len(n_list) > 1:
    #while True 보다 위가 낫다.
    #if len(n_list) == 1: break
    n_list.popleft()
    n_list.append(n_list.popleft())

print(n_list[0])
"""

#백준 2750 문제
# import sys
# input = sys.stdin.readline
# n = int(input())
# n_list = [0] * n
#
# for i in range(n):
#   n_list[i] = int(input())
#
# for i in range(n-1):
#     for z in range(n-1):
#         if n_list[z] > n_list[z+1]:
#             temp = n_list[z]
#             n_list[z] = n_list[z+1]
#             n_list[z+1] = temp
#
# for i in n_list:
#     print(str(i))
















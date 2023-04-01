#11047
import sys
from collections import deque

input = sys.stdin.readline

n, e = map(int, input().split())
n_list = deque([0] * n)

for i in range(n):
    n_list[i] = int(input())

count = 0
for _ in range(n):
    k = n_list.pop()
    if e - k < 0:
        continue
    else:
        z = e//k
        e -= k * z
        count += z

print(count)


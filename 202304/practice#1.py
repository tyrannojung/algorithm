#11047
import sys
from collections import deque

input = sys.stdin.readline

n, e = map(int, input().split())
n_list = deque([0] * n)

k_list = deque(list(map(int, str(e))))

for i in range(n):
    n_list[i] = int(input())

count = 0
for _ in range(n):
    k = n_list.pop()
    if e - k < 0:
        continue
    else:
        z = k_list.popleft()
        if str(k).rstrip("0") == "5":
            e -= k
            count += 1
            k_list.appendleft(z - 5)
        else:
            e -= k * z
            count += z

print(count)


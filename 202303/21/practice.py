#1697

import sys
from collections import deque
input = sys.stdin.readline

n, e = map(int, input().split())
d_list = deque()
d_list.append([n, 0])

check_count = 100001
def bfs(param1, param2):
    global check_count
    if param1 == e and check_count > param2:
        check_count = param1
    elif param2 < check_count:
        d_list.append([param1, param2])



while True:
    if not d_list:
        break

    k = d_list.popleft().copy()
    print(k)
    value = k[0]
    count = k[1]

    if value < n:
        a = value * 2
        bfs(a, count + 1)
        c = value + 1
        bfs(c, count + 1)
    if value > 0:
        b = value - 1

    bfs(b, count + 1)





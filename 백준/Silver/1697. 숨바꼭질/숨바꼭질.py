import sys
from collections import deque
input = sys.stdin.readline

n, e = map(int, input().split())
d_list = deque()
d_list.append([n, 0])

check_count = 100001
check_list = [False for i in range(200002)]

def bfs(param1, param2):
    global check_count
    if param1 == e and check_count > param2:
        check_count = param2
    else:
        if not check_list[param1]:
            check_list[param1] = True
            d_list.append([param1, param2])

if n == e:
    check_count = 0

while True:
    if not d_list:
        break
    k = d_list.popleft().copy()
    value = k[0]
    count = k[1]

    if check_count > count + 1:
        if value < e:
            a = value * 2
            bfs(a, count + 1)
            c = value + 1
            bfs(c, count + 1)
        if value > 0:
            b = value - 1
            bfs(b, count + 1)

print(check_count)
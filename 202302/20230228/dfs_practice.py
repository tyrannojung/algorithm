# V, E = 7, 8
# arr = list(map(int, "1 2 1 3 2 4 2 5 4 6 5 6 6 7 3 7".split()))
#
# print(arr)
#
# # 인접 리스트
# adjList = [[] for _ in range(V + 1)]
#
# for i in range(E):
#     n1, n2 = arr[i * 2], arr[i * 2 + 1]
#     adjList[n1].append(n2)
#     adjList[n2].append(n1)
#
#
# adjList[0].append(1)
# print(adjList)


import sys
input = sys.stdin.readline
sys.setrecursionlimit(10000)

n, e = map(int, input().split())

adjList = [[] for _ in range(n + 1)]
adjCheck = [False for _ in range(n + 1)]
adjCheck[0] = True

for _ in range(e):
    z, x = map(int, input().split())
    adjList[z].append(x)


def recursion_def(param):
    li = adjList[param]
    f_count = 0
    for k in li:
        if not adjCheck[k]:
            adjCheck[k] = True
            recursion_def(k)
            f_count += 1

    return f_count


count = 0
for i in range(n+1):
    if not adjCheck[i]:
        c = recursion_def(i)
        if c > 0:
            adjCheck[i] = True
            count += 1

print(adjCheck)

for i in range(n+1):
    if not adjCheck[i]:
        adjCheck[i] = True
        count += 1

print(count)


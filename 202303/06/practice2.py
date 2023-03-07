import sys
from collections import deque

sys.setrecursionlimit(10000)
input = sys.stdin.readline

n, e, p = map(int, input().split())

A = [[] for _ in range(n + 1)]
D = [False for _ in range(n + 1)]

B = [False for _ in range(n + 1)]


for i in range(e):
    z, x = map(int, input().split())
    A[z].append(x)
    A[x].append(z)

for i in A:
    i.sort()


dfs_list = list()


def DFS(param):
    for k in A[param]:
        if not D[k]:
            D[k] = True
            dfs_list.append(k)
            DFS(k)



deque_list = deque([])
bfs_list = list()


def BFS(param):
    global bfs_list
    for o in A[param]:
        deque_list.append(o)
        bfs_list.append(o)
        B[o] = True

    while True:
        if not deque_list:
            break

        value = deque_list.popleft()
        for r in A[value]:
            if not B[r]:
                deque_list.append(r)
                bfs_list.append(r)
                B[r] = True



dfs_list.append(p)
D[p] = True
DFS(p)
print(*dfs_list)


bfs_list.append(p)
B[p] = True
BFS(p)
print(*bfs_list)




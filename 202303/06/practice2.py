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
bfs_list = list()
print(A)



def DFS(param):
    for k in A[param]:
        if not D[k]:
            D[k] = True
            dfs_list.append(k)
            DFS(k)

deque_list = deque([])
def BFS(param):
    for o in A[param]:
        deque_list.append(o)
    while True:
        if deque_list:
            print("내일마무리")



dfs_list.append(p)
D[p] = True
DFS(p)
B[p] = True
BFS(p)

print(dfs_list)
print(bfs_list)
print(B)


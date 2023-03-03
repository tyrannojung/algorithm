import sys
sys.setrecursionlimit(10000)
input = sys.stdin.readline

n, e = map(int, input().split())

initialize_dps = [[] for _ in range(n)]
initialize_check = [False for _ in range(n)]


def initialize_dps_function():
    global initialize_check
    initialize_check = [False for _ in range(n)]


for i in range(e):
    k, x = map(int, input().split())
    initialize_dps[k].append(x)
    initialize_dps[x].append(k)

print(initialize_dps)


def DFS(param):
    for m in range(len(param)):
        if not initialize_check[m]:
            initialize_check[m] = True
            DFS(initialize_dps[m])


for i in range(n):
    initialize_dps_function()
    initialize_check[i] = True
    DFS(initialize_dps[i])
    print(initialize_check)


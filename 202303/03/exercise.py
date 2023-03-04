import sys
sys.setrecursionlimit(10000)
input = sys.stdin.readline

n, e = map(int, input().split())

initialize_dps = [[] for _ in range(n)]
initialize_check = [False for _ in range(n)]


def initialize_dps_function(param):
    global initialize_check
    check = [False] * n
    check[param] = True
    initialize_check = check


for i in range(e):
    k, x = map(int, input().split())
    initialize_dps[k].append(x)
    initialize_dps[x].append(k)

print(initialize_dps)


def DFS(param):
    for m in param:
        if not initialize_check[m]:
            initialize_check[m] = True
            check = DFS(initialize_dps[m])
            if not check:
                initialize_check[m] = False
            return True
        else:
            return False


for i in range(n):
    initialize_dps_function(i)
    DFS(initialize_dps[i])
    print(initialize_check)


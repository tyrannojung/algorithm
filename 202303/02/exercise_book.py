import sys
sys.setrecursionlimit(10000)
input = sys.stdin.readline

n, e = map(int, input().split())

initialize_dps = [[] for _ in range(e)]
initialize_check = [False for _ in range(e)]


def initialize_dps_function():
    global initialize_check
    initialize_check = [False for _ in range(e)]


for i in range(e):
    k, x = map(int, input().split())
    initialize_dps[k].append(x)
    initialize_dps[x].append(k)

print(initialize_dps)
count = 0


def DFS(param):
    global count
    for m in range(len(param)):
        initialize_dps_function()
        if not initialize_check[m]:
            count += 1
            initialize_check[m] = True
            print(count)
            if count == 4:
                print(initialize_check)
                break
            DFS(initialize_dps[m])
        else:
            break


for i in range(n):
    DFS(initialize_dps[i])
    print(initialize_check)


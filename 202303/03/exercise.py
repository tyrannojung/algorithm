import sys
sys.setrecursionlimit(10000)
input = sys.stdin.readline

n, e = map(int, input().split())

initialize_dps = [[] for _ in range(n)]
initialize_check = [False for _ in range(n)]
answer = [True for _ in range(n)]

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

check_answer = 0
def DFS(param):
    global check_answer
    count = 0
    for m in param:
        if not initialize_check[m]:
            initialize_check[m] = True
            if answer == initialize_check:
                check_answer = 1
            if DFS(initialize_dps[m]):
                initialize_check[m] = False
                count += 1
        else:
            count += 1
    if count == len(param):
        return True
    else:
        return False


for i in range(n):
    initialize_dps_function(i)
    DFS(initialize_dps[i])

print(check_answer)


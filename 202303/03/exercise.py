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

check_answer = 0


def DFS(param):
    global check_answer
    count = 0
    if check_answer == 1:
        return False
    for m in param:
        if not initialize_check[m]:
            initialize_check[m] = True
            if initialize_check.count(True) == 5:
                check_answer = 1
                return False
            if DFS(initialize_dps[m]):
                initialize_check[m] = False
                count += 1
            if check_answer == 1:
                return False
        else:
            count += 1
    if count == len(param):
        return True
    else:
        return False


for i in range(n):
    initialize_dps_function(i)
    DFS(initialize_dps[i])
    if check_answer == 1:
        break

print(check_answer)


import sys
sys.setrecursionlimit(10000)
input = sys.stdin.readline


n, e = map(int, input().split())

C = [[] for _ in range(n)]
R = [False for _ in range(n)]

for _ in range(e):
    z, x = map(int, input().split())
    C[z].append(x)
    C[x].append(z)


def initailize_C(param):
    for i in range(n):
        if i == param:
            R[i] = True
        else:
            R[i] = False


answer = 0
answer_count = 0
def DFS(param):
    count = 0
    global answer, answer_count
    for v in param:
        if not R[v]:
            R[v] = True
            answer_count += 1
            if answer_count == 4:
                answer = 1
                return False
            check = DFS(C[v])
            if answer == 1:
                return False
            if check:
                R[v] = False
                answer_count -= 1
                count += 1
        else:
            count += 1

        if count == len(param):
            return True


if e >= 4:
    for i in range(n):
        if answer == 1:
            break
        initailize_C(i)
        DFS(C[i])


print(answer)
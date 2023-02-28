import sys
sys.setrecursionlimit(10000)
input = sys.stdin.readline

n, e = map(int, input().split())

A = [[] for i in range(n + 1)]
R = [False for i in range(n + 1)]
R[0] = True

for i in range(e):
    a, b = map(int, input().split())
    A[a].append(b)
    A[b].append(a)


def check_recursion(param):
    count = 0
    result = False
    for i in A[param]:
        if not R[i]:
            R[i] = True
            count += 1
            check_recursion(i)
    if count > 0:
        result = True
        R[param] = True
    return result


rcount = 0
#check recursion
for i in range(n):
    if not R[i]:
        if check_recursion(i):
            rcount += 1

#not recursion 체크
for i in range(n + 1):
    if not R[i]:
        R[i] = True
        rcount += 1

print(rcount)
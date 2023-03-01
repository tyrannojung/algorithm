import sys
sys.setrecursionlimit(10000)
input = sys.stdin.readline

n, e = map(int, input().split())

L = [[] for _ in range(n)]
check_list = [False for _ in range(n)]
reset_list = list()

for _ in range(e):
    k, m = map(int, input().split())
    L[k].append(m)
    L[m].append(k)

print(L)

import sys

input = sys.stdin.readline
n, s_n = map(int, input().split())
n_list = list(map(int, input().split()))

s_list = [0]

for i in range(n):
    s_list.append(s_list[i] + n_list[i])

for i in range(s_n):
    a, b = map(int, input().split())
    print(s_list[b] - s_list[a-1])
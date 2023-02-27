import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
count_sort_list = [0] * 10001

for i in range(n):
    count_sort_list[int(input())] += 1

count = 0
for i in range(10001):
    if count == n:
        break
    k = count_sort_list[i]
    if k != 0:
        for _ in range(k):
            print(str(i) + '\n')
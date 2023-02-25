import sys
input = sys.stdin.readline
n = int(input())
n_list = [0] * n

for i in range(n):
  n_list[i] = int(input())

for i in range(n-1):
    for z in range(n-1):
        if n_list[z] > n_list[z+1]:
            temp = n_list[z]
            n_list[z] = n_list[z+1]
            n_list[z+1] = temp

for i in n_list:
    print(str(i))
import sys
input = sys.stdin.readline

n = int(input())
n_list = list(map(int, input().split()))

for i in range(n-1):

    k = n_list[i+1]
    index = 0
    check = False

    for z in range(i+1):
        if k < n_list[z]:
            index = z
            check = True
            break

    if check:
        for x in range(i,index-1,-1):
            n_list[x + 1] = n_list[x]

        n_list[index] = k


sum = 0
for q in range(n):
    sum += n_list[q] * (n-q)

print(sum)



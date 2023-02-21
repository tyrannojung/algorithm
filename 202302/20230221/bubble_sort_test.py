n = int(input())
n_list = []

for _ in range(n):
    n_list.append(int(input()))

temp = 0;
for i in range(n):
    for z in range(n-1):
        if n_list[z] > n_list[z+1]:
            temp = n_list[z]
            n_list[z] = n_list[z+1]
            n_list[z + 1] = temp

print(n_list)


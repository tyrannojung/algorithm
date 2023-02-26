n_list = list(input())
n_list_size = len(n_list)
n_list = list(map(int, n_list))
answer = ""

for i in range(n_list_size):
    max_num = 0
    max_num_index = 0
    for z in range(i,n_list_size):
        if max_num < n_list[z]:
            max_num = n_list[z]
            max_num_index = z

    if max_num > n_list[i]:
        n_list[max_num_index] = n_list[i]
        n_list[i] = max_num

    answer += str(n_list[i])

print(answer)
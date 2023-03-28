#2343

n, e = map(int, input().split())
n_list = list(map(int, input().split()))
n_list.sort()


k = 0
n_list_len = len(n_list)
l_sum = n_list[n_list_len - 1]

while True:
    check = False
    i = 0
    sum_check = 0
    for z in range(n_list_len):
        sum_check += n_list[z]
        i += 1
        if sum_check > l_sum:
            i -= 1
            break

    sum_check = 0
    for y in range(i, n_list_len - k):
        sum_check += n_list[y]
        i += 1
        if sum_check > l_sum:
            i -= 1
            break

    if i+k+1 == n_list_len:
        check = True
        print(l_sum)
        break
    else:
        k += 1
        l_sum += n_list[n_list_len-1-k]









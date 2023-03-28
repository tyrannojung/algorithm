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





# 7 7
# 5 9 6 8 7 7 5
#
# 답: 9
#
# 0번합친다. max값
#
# 8 7
# 3 3 10 10 3 2 6 2
#
# 답: 10
#
# 1번합치고
#
#
# 9 3
# 1 2 3 4 5 6 7 8 9
#
# 3번합치고
#
# 7 6
# 100 100 101 300 400 400 500
# 답: 500
#
# 4 2
# 1 1 1 1
# 답: 2
#
# 7 7
# 1 5 9 9 9 2 9
#
# 답: 9



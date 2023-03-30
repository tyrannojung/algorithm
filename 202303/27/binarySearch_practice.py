#2343

n, e = map(int, input().split())
n_list = list(map(int, input().split()))
n_list.sort()
min_num = max(n_list)
max_num = sum(n_list)

for z in range(100):
    check_sum = max_num + min_num

    print(max_num, min_num)
    if check_sum % 2 != 0:
        check_sum + 1

    k = check_sum // 2
    sum = 0
    count = 1
    for i in range(len(n_list)):
        sum += n_list[i]
        if sum > k:
            sum = 0
            sum += n_list[i]
            count += 1
    print("count == " + str(count))

    if count < e:
        max_num = k - 1
    elif count > e:
        min_num = k + 1
    elif count == e:
        max_num = k

    count = 1
    if min_num == max_num:
        print(max_num)
        break


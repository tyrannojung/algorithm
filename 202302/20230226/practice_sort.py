#선택정렬
# n_list = list(input())
# n_list_size = len(n_list)
# n_list = list(map(int, n_list))
# answer = ""
#
# for i in range(n_list_size):
#     max_num = 0
#     max_num_index = 0
#     for z in range(i,n_list_size):
#         if max_num < n_list[z]:
#             max_num = n_list[z]
#             max_num_index = z
#
#     if max_num > n_list[i]:
#         n_list[max_num_index] = n_list[i]
#         n_list[i] = max_num
#
#     answer += str(n_list[i])
#
# print(answer)

#삽입정렬

n = int(input())
n_list = list(map(int, input().split()))

#31432
#13432
#13432
#13342
#12334
for i in range(n-1):
    temp = 0;
    num = -1;
    for z in range(i+1):
        if n_list[z] > n_list[i+1]:
            temp = n_list[z]
            num = z
            n_list[z] = n_list[i+1]
            break;


    c_num = 0























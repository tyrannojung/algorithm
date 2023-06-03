import sys
input = sys.stdin.readline

n = int(input()) # n개
n_list = list(map(int, input().split())) # a1, a2, a3 ... an


def d_programming(arr):
    f_value = [0] * n
    f_value[0] = arr[0] # 시간복잡도 O[1]

    for i in range(1, n): # 시간복잡도 O[n]
        f_value[i] = max(0, f_value[i - 1]) + arr[i] # 시간복잡도 O[n] + O[1]

    return max(f_value) # 시간복잡도 O[n]


answer = d_programming(n_list)
print(answer)

import sys

input = sys.stdin.readline
print = sys.stdout.write

c = int(input())
c_list = list(map(int, input().split()))
f = int(input())
k_list = list(map(int, input().split()))
c_list.sort()

c_start = 0
c_end = len(c_list) - 1
c_mid = 0


def find_num(param):
    global c_start, c_end, c_mid
    c_start = 0
    c_end = len(c_list) - 1
    c_mid = 0

    while True:
        c_sum = c_start + c_end
        if c_sum % 2 == 0:
            c_mid = c_sum // 2
        else:
            c_mid = (c_sum // 2) + 1

        if c_list[c_mid] == param:
            print("1" + '\n')
            break

        if c_end - c_start == 1 or c_end == c_start:
            if c_list[c_start] == param or c_list[c_end] == param:
                print("1" + '\n')
            else:
                print("0" + '\n')
            break

        if c_list[c_mid] > param:
            c_end = c_mid - 1
        else:
            c_start = c_mid + 1


for i in k_list:
    find_num(i)

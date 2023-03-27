import sys
input = sys.stdin.readline
print = sys.stdout.write

c = int(input())
c_list = list(map(int, input().split()))
f = int(input())
k_list = list(map(int, input().split()))
c_list.sort()


def find_num(param):
    f_list = c_list.copy()
    while True:
        c_mid_len = len(f_list)
        c_mid = c_mid_len // 2

        if c_mid_len == 0:
            print("0" + '\n')
            break
        elif f_list[c_mid] == param:
            print("1" + '\n')
            break
        elif c_mid_len == 1:
            print("0" + '\n')
            break

        if f_list[c_mid] > param:
            f_list = f_list[:c_mid]
        else:
            f_list = f_list[c_mid+1:]

for i in k_list:
    find_num(i)
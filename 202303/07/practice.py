import sys
sys.setrecursionlimit(10000)

n, e = map(int, input().split())
A = []

for _ in range(n):
    value = list(map(int, input()))
    A.append(value)

def rb_function(param):
    r_list = list()
    right_list = [0] * 2
    bottom_list = [0] * 2
    top_list = [0] * 2
    left_list = [0] * 2

    if param[1] + 1 == e:
        right_list[0] = 0
        right_list[1] = 0
    else:
        right_list[0] = param[0]
        right_list[1] = param[1] + 1

    if param[0] + 1 == n:
        bottom_list[0] = 0
        bottom_list[1] = 0
    else:
        bottom_list[0] = param[0] + 1
        bottom_list[1] = param[1]

    if param[0] == 0:
        top_list[0] = 0
        top_list[1] = 0
    else:
        top_list[0] = param[0] - 1
        top_list[1] = param[1]

    if param[1] == 0:
        left_list[0] = 0
        left_list[1] = 0
    else:
        left_list[0] = param[0]
        left_list[1] = param[1] - 1

    r_list.append(right_list)
    r_list.append(bottom_list)
    r_list.append(top_list)
    r_list.append(left_list)

    return r_list


count = 0
answer = 0
answer_list = list()
def DFS(param):
    global count, answer
    not_check = [0, 0]
    answer_check = [n - 1, e - 1]
    A[param[0]][param[1]] = 0
    check_count = 0

    if answer_check == param:
        answer = count + 1
        answer_list.append(answer)
        A[param[0]][param[1]] = 1
        count -= 1
        return True

    for i in rb_function(param):
        if not A[i[0]][i[1]] == 0:
            if i == not_check:
                check_count += 1
            else:
                count += 1
                check = DFS(i)
                if check:
                    check_count += 1
        else:
            check_count += 1
        if check_count == 4:
            A[param[0]][param[1]] = 0
            count -= 1
            return True
    return False


DFS([0,0])

if answer_list:
    print(min(answer_list))
else:
    print(0)
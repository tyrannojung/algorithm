n = int(input())
n_list = list()

for i in range(n):
    n_list.append(int(input()))

stack = []
num = 1
answer = ""

for i in range(n):
    su = n_list[i]
    if su >= num:
        while su >= num:
            stack.append(num)
            num += 1
            answer += "+\n"
        stack.pop()
        answer += "-\n"
    else:
        n = stack
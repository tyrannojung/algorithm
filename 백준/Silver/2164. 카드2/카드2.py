from collections import deque
n = int(input())
n_list = deque()
for i in range(n):
    n_list.append(i + 1)

while True:
    if len(n_list) == 1: break
    n_list.popleft()
    n_list.append(n_list.popleft())

print(n_list[0])
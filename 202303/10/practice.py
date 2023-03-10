from collections import deque


n, e = map(int, input().split())
puzzle = list()


for i in range(n):
    puzzle.append(list(map(int, input())))


print(puzzle)
from collections import deque

n, e = map(int, input().split())

c_puzzle = deque()
ch_puzzle = deque()
t_puzzle = list()

puzzle = list()
for i in range(n):
    puzzle.append(list(map(int, input())))

c_puzzle.append(puzzle)
ch_puzzle.append([0, 0, 0])

# a_puzzle = deque()
# for i in range(len(c_puzzle)):
#     k = list()
#     for z in c_puzzle[i]:
#         if z == 1:
#             k.append(True)
#         else:
#             k.append(False)
#     a_puzzle.append(k)
# print(a_puzzle)




# while True:
if ch_puzzle:
    bfs_l = c_puzzle.popleft()
    bfs_p = ch_puzzle.popleft()

    row_num = bfs_p[0]
    column_num = bfs_p[1]

    #east west south north
    east = column_num + 1
    north = row_num - 1
    west = row_num - 1
    south = column_num + 1

    if east < e and bfs_l[row_num][east] == 1:
        east_bfs_l = bfs_l.copy()
        east_bfs_p = bfs_p.copy()
        east_bfs_l[row_num][column_num] = 0
        east_bfs_p[0] = row_num
        east_bfs_p[1] = east
        east_bfs_p[2] = east_bfs_p[2] + 1
        c_puzzle.append(east_bfs_l)
        ch_puzzle.append(east_bfs_p)

    if north >= 0 and bfs_l[north][column_num] == 1:
        north_bfs_l = bfs_l.copy()
        north_bfs_p = bfs_p.copy()
        north_bfs_l[row_num][column_num] = 0
        north_bfs_p[0] = north
        north_bfs_p[1] = column_num
        north_bfs_p[2] = north_bfs_p[2] + 1
        c_puzzle.append(north_bfs_l)
        ch_puzzle.append(north_bfs_p)

    if west >= 0 and bfs_l[row_num][west] == 1:
        west_bfs_l = bfs_l.copy()
        west_bfs_p = bfs_p.copy()
        west_bfs_l[row_num][column_num] = 0
        west_bfs_p[0] = row_num
        west_bfs_p[1] = west
        west_bfs_p[2] = west_bfs_p[2] + 1
        c_puzzle.append(west_bfs_l)
        ch_puzzle.append(west_bfs_p)

    if south < n and bfs_l[south][column_num] == 1:
        south_bfs_l = bfs_l.copy()
        south_bfs_p = bfs_p.copy()
        south_bfs_l[row_num][column_num] = 0
        south_bfs_p[0] = south
        south_bfs_p[1] = column_num
        south_bfs_p[2] = south_bfs_p[2] + 1
        c_puzzle.append(south_bfs_l)
        ch_puzzle.append(south_bfs_p)

else:
    #break
    print("hi")


print(c_puzzle)
print(ch_puzzle)




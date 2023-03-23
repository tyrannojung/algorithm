from collections import deque
n, e = map(int, input().split())

c_puzzle = deque()
ch_puzzle = deque()
t_puzzle = list()

puzzle = list()
for i in range(n):
    puzzle.append(list(map(int, input())))

puzzle[0][0] = 0
c_puzzle.append(puzzle)
ch_puzzle.append([0, 0, 1])

while True:
    if ch_puzzle:
        bfs_l = c_puzzle.popleft()
        bfs_p = ch_puzzle.popleft()

        row_num = bfs_p[0]
        column_num = bfs_p[1]

        #east west south north
        east = column_num + 1
        north = row_num - 1
        west = column_num - 1
        south = row_num + 1

        if east < e and bfs_l[row_num][east] == 1:
            east_bfs_l = bfs_l
            east_bfs_p = bfs_p[:]

            if row_num == n - 1 and east == e - 1:
                t_puzzle.append(east_bfs_p[2] + 1)
                continue

            east_bfs_l[row_num][east] = 0
            east_bfs_p[0] = row_num
            east_bfs_p[1] = east
            east_bfs_p[2] = east_bfs_p[2] + 1
            c_puzzle.append(east_bfs_l)
            ch_puzzle.append(east_bfs_p)

        if north >= 0 and bfs_l[north][column_num] == 1:
            north_bfs_l = bfs_l
            north_bfs_p = bfs_p[:]

            if north == n - 1 and column_num == e - 1:
                t_puzzle.append(north_bfs_p[2] + 1)
                continue

            north_bfs_l[north][column_num] = 0
            north_bfs_p[0] = north
            north_bfs_p[1] = column_num
            north_bfs_p[2] = north_bfs_p[2] + 1
            c_puzzle.append(north_bfs_l)
            ch_puzzle.append(north_bfs_p)

        if west >= 0 and bfs_l[row_num][west] == 1:
            west_bfs_l = bfs_l
            west_bfs_p = bfs_p[:]

            if row_num == n - 1 and west == e - 1:
                t_puzzle.append(west_bfs_p[2] + 1)
                continue

            west_bfs_l[row_num][west] = 0
            west_bfs_p[0] = row_num
            west_bfs_p[1] = west
            west_bfs_p[2] = west_bfs_p[2] + 1
            c_puzzle.append(west_bfs_l)
            ch_puzzle.append(west_bfs_p)

        if south < n and bfs_l[south][column_num] == 1:
            south_bfs_l = bfs_l
            south_bfs_p = bfs_p[:]

            if south == n - 1 and column_num == e - 1:
                t_puzzle.append(south_bfs_p[2] + 1)
                continue

            south_bfs_l[south][column_num] = 0
            south_bfs_p[0] = south
            south_bfs_p[1] = column_num
            south_bfs_p[2] = south_bfs_p[2] + 1
            c_puzzle.append(south_bfs_l)
            ch_puzzle.append(south_bfs_p)

    else:
        break

print(min(t_puzzle))

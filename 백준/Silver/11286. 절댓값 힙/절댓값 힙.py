from queue import PriorityQueue
import sys

input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
priority_queue = PriorityQueue()

if n == 0:
    print(str(0))

for i in range(n):
    q = int(input())
    if q != 0:
        priority_queue.put((abs(q),q))
        continue
    elif priority_queue.qsize() == 0:
        print(str(0) + '\n')
        continue
    else:
        print(str(priority_queue.get()[1]) + '\n')
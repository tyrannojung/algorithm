#큐
from queue import PriorityQueue
import sys
print = sys.stdout.write
input = sys.stdin.readline
myQueue = PriorityQueue()

request = int(input())
myQueue.put((abs(request), request))
request = int(input())
myQueue.put((abs(request), request))

temp = myQueue.get()[1]
print(str(temp))

temp = myQueue.get()
print(str(temp))

# from queue import PriorityQueue
# import sys
# print = sys.stdout.write
# input = sys.stdin.readline
# N = int(input())
# myQueue = PriorityQueue()
#
# for i in range(N):
#     request = int(input())
#     if request == 0:
#         if myQueue.empty():
#             print('0\n')
#         else:
#             temp = myQueue.get()
#             print(str((temp[1]))+'\n')
#     else:
#         myQueue.put((abs(request), request))







#스택복습
# n = int(input())
# ln = [0] * n
#
# for i in range(n):
#     ln[i] = int(input())
#
# stack = []
# num = 1
#
# for i in range(n):
#     k = ln[i]
#     if k >= num:
#         while k >= num:
#             stack.append(k)
#             num += 1
#             print("+\n")
#         stack.pop()
#         print("-\n")
#     else:
#         stack.pop()
#         print("-\n")

















#구간합 복
# import sys
# input = sys.stdin.readline
#
# n, snum = map(int, input().split())
# nlist = list(map(int, input().split()))
#
# sumlist = [0]
#
# for i in range(n):
#     sumlist.append(sumlist[i] + nlist[i])
#
# for _ in range(snum):
#     k,l = map(int, input().split())
#     print(sumlist[l] - sumlist[k-1])



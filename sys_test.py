#3
# 수 N개가 주어졌을 때 i번째 수에서 j번째 수까지의 합을 구하는 프로그램을 작성하시오.
# 1번째 줄에 수의 개수 N(1 <= N <= 100,000), 합을 구해야 하는 횟수 M(1 <= M <= 100,000), 2번째 줄에 N개의 수가 주어진다.
# 각 수는 1,000보다 작거나 같은 자연수다. 3번째 줄부터는 M개의 줄에 합을 구해야 하는 구간 i와 j가 주어진다.

import sys
input = sys.stdin.readline;
suNo, quizNo = map(int, input().split())
numbers = list(map(int, input().split()))
prefix_sum = [0]; # list에 0을 처음에 넣어, if else를 쓰지 않더라도 효과를 볼 수 있었다.
temp = 0;

for i in numbers:
    temp = temp + i
    prefix_sum.append(temp)

for c in range(quizNo):
    i, j = map(int, input().split())
    print(prefix_sum[j] - prefix_sum[i-1])


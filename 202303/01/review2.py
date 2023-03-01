import sys

sys.setrecursionlimit(10000)
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())


def check_prime(param):
    if param == 1:
        return False
    for i in range(2, param):
        if param % i == 0:
            return False
    return True


def find_interesting_prime(param):
    for i in range(1, 10):
        sum = param + i
        if sum < 10 ** n and check_prime(sum):
            if sum * 10 < 10 ** n:
                find_interesting_prime(sum * 10)
            elif len(str(sum)) == n:
                print(str(sum) + '\n')


find_interesting_prime(1)

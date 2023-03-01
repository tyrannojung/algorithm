#소수 = 1과 자기자신만 약수를 가지는 공약수

# ex = "1 2 4 911 683 701 359 883 277 577 503 487 929 149 353 383 821 983 673 661 467 557 293 947 829 109 907 743 269 617 179 641 401 199 919 659 191 761 389 727 229 283 313 839 227 167 971 673 433 127 383 761 643"
# n_list = list(map(int, ex.split()))
# print(n_list)
# for i in n_list:
#     print(check_prime(i))

import sys
sys.setrecursionlimit(10000)
input = sys.stdin.readline
print = sys.stdout.write


n = int(input())


def check_prime(param):
    for i in range(2, param):
        if param % i == 0:
            return False
    return True


def calcul(param):
    for i in range(1, 10):
        num = int(str(param) + str(i))
        if check_prime(num):
            leng = len(str(num))
            if leng == n:
                print(str(num) + '\n')
            elif leng < n + 1:
                calcul(num)

for i in range(10):
    calcul(i)


#n^3으로 시간복잡도 실패



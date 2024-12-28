import sys

sys.setrecursionlimit(10000)
input = sys.stdin.readline


#아이디어 소수를 먼저 구해서 리스트, 구한 값에서 dfs진행

n = int(input())


#소수 찾기
def prime_check(param):
    for p in range(2, param):
        if param % p == 0:
            return False
    if param != 1:
        return True
    else:
        return False


n_list = list()

for i in range(10**(n-1), 10**n):
    if prime_check(i):
        n_list.append(i)

check_list = []

for i in range(len(n_list)):
    lst = list(str(n_list[i]))
    le = len(lst)
    kk = list()
    sum = ""
    for z in range(le):
        sum += lst[z]
        if prime_check(int(sum)):
            kk.append(sum)
    if len(kk) == n:
        print(kk[n-1])

#n^4은 나오는거같음. 내장함수 활용 실패











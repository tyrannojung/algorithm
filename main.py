# for a in range(0, 6, 1):
#     print(a)
# start,stop,step

#print(list(range(0, 10, 1)))
#print(list(range(0, 10)))
#print(list(range(10)))

# n = int(input())
# N = int(input())
#
# if len(str(N)) == n:
#     sum = 0
#     LN = list(map(int, str(N)))
#     for x in LN:
#         sum += x
#     print(sum)
#
# else:
#     print("false")

# n = input()
# numbers = list(input())
# sum = 0
#
# for i in numbers:
#     sum = sum + int(i)
#
# print(sum)

#n = input()
#record = list(map(int, input().split()))
# split 함수는 문자열을 일정한 규칙으로 잘라서,리스트로 만들어 주는 함수 * default : 띄어쓰기
# map(function, iterable) - 첫번째인자 : 반복할 함수, 두번인자 반복할 자료형(list tuple ...)

n = int(input())
record = list(map(int, input().split()))
sum = 0

for i in record:
    sum += i

print(sum/n)


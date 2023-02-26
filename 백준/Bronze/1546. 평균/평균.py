n = int(input())
nlist = list(map(int, input().split()))
m_point = max(nlist)
sum = 0

for i in range(n):
    sum += nlist[i]

print(sum/m_point*100/n)
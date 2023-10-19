# The prime factors of 13195 are 5, 7, 13 and 29.

# What is the largest prime factor of the number 600851475143?

numX = 600851475143
hundredRange = range(101)

from array import array
primosArray = array('i')
primosArray.append(2)

def firstsPrimeNums():
    for i in range(2,1000001):
        for j in range(2,1000001):
            if i%j == 0:
                break
            elif j == i -1:
                primosArray.append(i)
    
firstsPrimeNums()

for element in primosArray:
    if numX%element == 0:
        largestPrimeNum = element


print(primosArray)
print("el factor numero primo mas grande de: ", numX, " es: ", largestPrimeNum)


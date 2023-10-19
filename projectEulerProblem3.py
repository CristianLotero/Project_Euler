# The prime factors of 13195 are 5, 7, 13 and 29.

# What is the largest prime factor of the number 600851475143?

numX = 100
# numX = 13195

from array import array
primosArray = array('i')

primosArray.append(2)

def LargestPrime(numX):
    target = numX
    i = 2
    j = 2
    for i in target - 1:
        print (i)
        for j in i - 1:
            if i%j == 0:
                break
            elif j == i -1:
                primosArray.append(i)
    
    primosArray.reverse()
    
for element in primosArray:
    if numX%element == 0:
        largestPrime = element

print('El primo mas grande es: ', largestPrime)
print(primosArray)




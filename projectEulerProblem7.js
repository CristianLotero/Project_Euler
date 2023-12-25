// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10001st prime number?

let primeArray = [2,3,5,7,11];
let NPrimeIndex = 10001;

let numberToParse = 12;

function parsePrimes () {
    while (primeArray.length !== NPrimeIndex){
        console.log(numberToParse)
        if (numberToParse%2 === 0 || numberToParse%3 === 0 || numberToParse%5 === 0 || numberToParse%7 === 0) {
            numberToParse += 1;
        } else {
            const primeOrNor = primeArray.some((element) => numberToParse%element === 0);
            if (!primeOrNor) {
                primeArray.push(numberToParse);
            }
            numberToParse += 1;
        }
    }
}

parsePrimes();
console.log(`Este es el array de números primos al finalizar: ${primeArray}`);
console.warn(`Este es el 10001st número primo ${primeArray[10000]}`);
// The sum of the primes below 10 is 2 + 3 + 5+ 7 = 17

// Find the sum of all the primes below two million.

let primeArray = [2,3,5,7,11];
let NPrimeLimit = 2000000;

let numberToParse = 12;

function parsePrimes () {
    while (numberToParse < NPrimeLimit){
        if (numberToParse%2 === 0 || numberToParse%3 === 0 || numberToParse%5 === 0 || numberToParse%7 === 0) {
            numberToParse += 1;
        } else {
            const primeOrNot = primeArray.some((element) => numberToParse%element === 0);
            if (!primeOrNot) {
                primeArray.push(numberToParse);
            }
            numberToParse += 1;
        }
    }
    let sumOf2MPrimes = primeArray.reduce((total,element) => total + element);
    console.log(`el resultado de la suma es ${sumOf2MPrimes}`)
}

parsePrimes()

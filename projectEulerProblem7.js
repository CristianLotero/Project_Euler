// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10001st prime number?

let primeArray = [2,3,5,7,11];
let NPrimeIndex = 10;


function parsePrimes () {
    while (primeArray.length !== NPrimeIndex){
        let numberToParse = 12;
        for (i=2 ; i < numberToParse ; i++) {
            if (numberToParse%i === 0) {
                //...
            } else if (i == numberToParse) {
                //...
            }
        }
    }
}

console.log(primeArray);
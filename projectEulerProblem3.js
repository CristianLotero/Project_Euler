// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143?

let answerDisplay = document.querySelector('.answer') ;

// let numX = 600851475143
// let numX = 13195;
let numX = 100;
(function LargestPrime(num) {
    let target = num;
    let largestPrime = 2;
    for (i=2 ; i < target ; i++) {
        for (j=2 ; j < i ; j++){
            if ((i%j == 0)) {
                console.log(` ${j} no es primo \n`)
            }
        }
    }
})(numX);
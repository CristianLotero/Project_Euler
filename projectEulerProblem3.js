// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143?

let answerDisplay = document.querySelector('.answer') ;

const numX = 600851475143;
// let numX = 13195;
let primosArray = [2];
(function LargestPrime(num) {
    for (i=2 ; i < 10000 ; i++) {
        for (j=2 ; j < i ; j++){
            if ((i%j == 0)) {
                break;
            } else if (j == i -1){
                primosArray.push(i);
            }
        }
    }
    primosArray.sort((a ,b) => b - a);
    let largestPrime = primosArray.find(element => numX%element == 0);
    console.log(`el factor primo mas grande es: ${largestPrime}`);

})(numX);





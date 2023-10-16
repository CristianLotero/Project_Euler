// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143?

let answerDisplay = document.querySelector('.answer') ;

const numX = BigInt(600851475143);
// let numX = 13195;
let primosArray = [2];
(function LargestPrime(num) {
    let target = num;
    for (i=2 ; i < target ; i++) {
        for (j=2 ; j < i ; j++){
            if ((i%j == 0)) {
                // console.log(` ${i} No es primo \n`)
                break;
            } else if (j == i -1){
                // console.log(` ${i} Es primisimo !!!!!!!!!!!!!!!!!!!! \n`)
                primosArray.push(i);
            }
        }
    }
    primosArray.sort((a ,b) => b - a);
    let largestPrime = primosArray.find(element => numX%element == 0);
    console.log(largestPrime);

})(numX);





// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 * 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

let result= 0;
let resultArray;
let resultArrayReversed;
let largest = 0;

let breakpoint = 0;
(function palindrome3digits() {
    for (let i=100 ; i < 1000 ; i++) {
        for (let j=100 ; j < 1000 ; j++) {
            result = i * j;
            resultArray = result.toString().split("");
            resultArrayReversed = [...resultArray].reverse();
            // console.log(`RESULTADO: ${result} de ${i} * ${j}`)
            let isEqual = resultArray.toString() === resultArrayReversed.toString();
            if (isEqual) {
                    console.log(`encontrado: ${result} producto de ${i} * ${j}`)
                    findLargest = () => {
                        return result > largest ? result : largest;
                    };
                    largest = findLargest();
                }
            }
        }
    })();

console.log(`resultado final : ${largest}`)


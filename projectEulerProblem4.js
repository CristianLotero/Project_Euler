// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 * 99.
// Find the largest palindrome made from the product of two 3-digit numbers.
let result= 0;
let resultArray;
let resultArrayReversed;

let breakpoint = 0;
(function palindrome3digits() {
    for (let i=999 ; i > 99 ; i--) {
        for (let j=999; j > 99 ; j--) {
            result = i * j;
            resultArray = result.toString().split("");
            // resultCopy = resultArray;
            resultArrayReversed = [...resultArray].reverse();
            console.log(`RESULTADO: ${result} de ${i} * ${j}`)
            // console.log(`RESULT ARRAY: ${resultArray}`)
            // console.log(`REVERSED: ${resultArrayReversed}`)
            let isEqual = resultArray.toString() === resultArrayReversed.toString();
            if (isEqual) {
                    console.log(`El palindromo mas grande es ${resultArrayReversed} producto de ${i} * ${j}`)
                    return;
                }
            }
        }
    })();



// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 * 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

(function palindrome3digits() {
    // for (i=999 ; i > 99 ; i--) {
    //     for (j=999; j > 99 ; j--) {
    //         result = i * j;
    //         console.log(`el resultado de ${i} x ${j} es: ${result}`)
    //     }
    // }

    let result = 9335339;
    let resultString = result.toString();
    let resultArray = Array.from(resultString);
    let resultArray1 = resultArray.slice(resultArray.length/2);
    let resultArray2 = resultArray.slice(-(resultArray.length/2));


    console.log(resultArray1);
    console.log(resultArray2);
    // console.log(typeof(resultArray))
 })();



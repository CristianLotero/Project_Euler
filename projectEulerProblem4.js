// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 * 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

let breakpoint = 0;
(function palindrome3digits() {
    for (i=999 ; i > 99 ; i--) {
        for (j=999; j > 99 ; j--) {
            if (breakpoint == 1){
                break;
            }
            let result = i * j;
            let resultArray = result.toString().split("");
            for (k=0 ; k < resultArray.length; k++) {
                if (resultArray[k] == resultArray[((resultArray.length-1)-k)]) {
                    console.log(`${result} parece palindromo coincidencias ${k}`)
                } else {
                    console.log(`${result} no es palindromo`)
                    break;
                }
            }
            console.log(`el palindromo mas grande es: ${result} de ${i} x ${j}`);
            breakpoint = 1;
        }
    }
})();



// A Pythagorean triplet is a set of three natural numbers, a < b < c , for which, 

// a² + b² = c².

// For example, 3² + 4² = 9 + 16 = 25 = 5²

// There exists exactly one Pythagorean triplet for wich  a + b + c = 1000.

// Find the product abc.

function pythagoreanTriplet () {
    for (k=6, j=5, i=4; i+j+k <= 1000 ; k++ ) {
        for (; j < k; j++ ){
            for(; i**2 + j**2 <= k**2 && i < j ; i++) {
                if (i**2+j**2 === k**2) {
                    console.log(`La tripleta pitagorea (${i}² = ${i**2}) +  (${j}² = ${j**2}) = ${i**2 + j**2} =  ${k}² = ${k**2} fue encontrada`)
                }
                if (i+j+k === 1000) {
                console.warn(`encontrado!!!  (${i}² = ${i**2}) +  (${j}² = ${j**2}) = ${i**2 + j**2} =  ${k}² = ${k**2}`)
                }
            }
        }
    }    
}

pythagoreanTriplet();




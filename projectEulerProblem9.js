// A Pythagorean triplet is a set of three natural numbers, a < b < c , for which, 

// a² + b² = c².

// For example, 3² + 4² = 9 + 16 = 25 = 5²

// There exists exactly one Pythagorean triplet for wich  a + b + c = 1000.

// Find the product abc.

function pythagoreanTriplet () {
    for (k=3, j=2, i=1; i+j+k <= 1000 ; k++ ) {
        for (j=2; j < k; j++ ){
            for(i=1; i**2 + j**2 <= k**2 && i < j ; i++) {
                if (i**2+j**2 === k**2) {
                    console.log(`La tripleta pitagorea (${i}² = ${i**2}) +  (${j}² = ${j**2}) = ${i**2 + j**2} =  ${k}² = ${k**2} fue encontrada`)
                    if (i+j+k === 1000) {
                    console.warn(`encontrado!!!  ${i} + ${j} + ${k} = ${i+j+k }`)
                    a=i;
                    b=j;
                    c=k;
                    }
                }
            }
        }
    }
    console.log (`el resultado del problema 9 de Project Euler es ${a*b*c}  `)
}

pythagoreanTriplet();




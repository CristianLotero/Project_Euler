let answerDisplay = document.querySelector('.answer') ;
let limite = 4000000

let sumEvenValued = 0;

(function fibonacci(a,b) {
    let fiboA = a;
    let fiboB = b;
    let fiboArray = []
    while (fiboB < limite) {
        console.log(`fiboA: ${fiboA} \n fiboB: ${fiboB} \n Sumatoria de pares: ${sumEvenValued} \n La serie quedaria: ${fiboArray} `)
        
        if (fiboB%2 == 0){
            sumEvenValued += fiboB;
        }
        fiboA = [fiboB, fiboB=fiboA][0];
        fiboB = fiboA + fiboB;
        fiboArray.push(fiboB)
    }
    answerDisplay.innerText = sumEvenValued;
})(1,2);

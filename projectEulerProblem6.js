// The sum of the squares of the first ten natural numbers is,
//              1² + 2² + ... + 10² = 385.
// The square of the sum of the first ten natural numbers is,
//              (1 + 2 + ... + 10)² = 55² = 3025.
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

let arrSquareSum = [];
let arrSumSquare = [];

let SumSquareResult = 0;
let squareSumResult = 0;
let difference = 0;

function sumSquarePush () {
    for(i=1 ; i <= 100 ; i++) {
        arrSquareSum.push(i**2)
    }
    console.log(`El array de suma de cuadrados es: ${arrSquareSum}`)
    SumSquareResult = arrSquareSum.reduce((total, item)=> total + item);
    console.log(`el resultado de la suma de cuadrados es: ${SumSquareResult}`);
}

function squareSumPush() {
    for (i=1; i <= 100 ; i++){
        arrSumSquare.push(i);
    }
    let sumSquareTotal = arrSumSquare.reduce((total, item)=> total + item);
    console.log(`El array del cuadrado de la suma es: ${arrSumSquare}`)
    squareSumResult = sumSquareTotal**2;
    console.log(`el resultado del cuadrado de la  suma es: ${squareSumResult}`);
}
function difSumSquares () {
    difference =  squareSumResult - SumSquareResult;
    console.log(difference)
}

sumSquarePush();
squareSumPush();
difSumSquares();
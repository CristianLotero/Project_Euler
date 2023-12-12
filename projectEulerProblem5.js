// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1
//  to 20?

function pretentiousNumber () {
    let numeroX = 10
    divisiblePorTodos = false;
    while (!divisiblePorTodos) {
        for (let i = 2; i <= 10 ; i++) {
            if (numeroX % i == 0) {
                console.log(`${numeroX} es divisible por ${i}`)
                continue
            } else {
                numeroX++
            }
        }
        divisiblePorTodos = true;
    }
    console.log(`Terminé con numeroX =${numeroX}`)
}
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1
//  to 20?


let divisorsArray = [];

for (i=1; i <= 20 ; i++) {
    divisorsArray.push(i)
}

console.log(divisorsArray);


function pretentiousNumber () {
    
    for (i = 10 ; i < 1000000000; i++) {
        if(divisorsArray.every((el)=> i % el === 0 )) {
            console.log(`El numero ${i} es divisible por todos`);
            break
        }
    }
}
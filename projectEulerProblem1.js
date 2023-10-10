


let answerDisplay = document.querySelector(".answer");
let quantity = 1000;
let answer = 0;

(function abracadabra(totalNumber) {
    for (i=1; i<totalNumber ; i++){
        if (i%3==0 || i%5==0) {
            answer += i; 
        } 
    } 
    answerDisplay.innerText = answer;
})(quantity);


const firstQuestion = document.querySelector(".first-question");
const firstAnswer = document.querySelector(".first-answer");
const questionMark1 = document.getElementById("questionMark1");

const secondQuestion = document.querySelector(".second-question");
const secondAnswer = document.querySelector(".second-answer");
const questionMark2 = document.getElementById("questionMark2");

const thirdQuestion = document.querySelector(".third-question");
const thirdAnswer = document.querySelector(".third-answer");
const questionMark3 = document.getElementById("questionMark3");

const fourthQuestion = document.querySelector(".fourth-question");
const fourthAnswer = document.querySelector(".fourth-answer");
const questionMark4 = document.getElementById("questionMark4");

const fifthQuestion = document.querySelector(".fifth-question");
const fifthAnswer = document.querySelector(".fifth-answer");
const questionMark5 = document.getElementById("questionMark5");

const sixthQuestion = document.querySelector(".sixth-question");
const sixthAnswer = document.querySelector(".sixth-answer");
const questionMark6 = document.getElementById("questionMark6");

const seventhQuestion = document.querySelector(".seventh-question");
const seventhAnswer = document.querySelector(".seventh-answer");
const questionMark7 = document.getElementById("questionMark7");

firstQuestion.addEventListener("click", function(){
    firstAnswer.classList.toggle("show");
    questionMark1.classList.toggle("rotate");
})

secondQuestion.addEventListener("click", function(){
    secondAnswer.classList.toggle("show");
    questionMark2.classList.toggle("rotate");
})

thirdQuestion.addEventListener("click", function(){
    thirdAnswer.classList.toggle("show");
    questionMark3.classList.toggle("rotate");
})

fourthQuestion.addEventListener("click", function(){
    fourthAnswer.classList.toggle("show");
    questionMark4.classList.toggle("rotate");
})

fifthQuestion.addEventListener("click", function(){
    fifthAnswer.classList.toggle("show");
    questionMark5.classList.toggle("rotate");
})

sixthQuestion.addEventListener("click", function(){
    sixthAnswer.classList.toggle("show");
    questionMark6.classList.toggle("rotate");
})

seventhQuestion.addEventListener("click", function(){
    seventhAnswer.classList.toggle("show");
    questionMark7.classList.toggle("rotate");
})


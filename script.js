
const quiz = new Quiz(questions);
const ui = new UI();

    ui.btn_start.addEventListener("click", function () {
    ui.quiz_box.classList.add("active");
    startTimer(10);
    ui.showQuestion(quiz.getQuestion());
    ui.showQuestionNum(quiz.questionIndex+1,quiz.questions.length)
    ui.btn_next.classList.remove("show");

});

ui.btn_next.addEventListener("click", function () {
    if (quiz.questions.length!=quiz.questionIndex+1) {
        quiz.questionIndex += 1;
        clearInterval(counter);
        startTimer(10);
        ui.showQuestion(quiz.getQuestion());
        ui.showQuestionNum(quiz.questionIndex + 1, quiz.questions.length);       
        ui.btn_next.classList.remove("show");
    }
    else {
        clearInterval(counter);
        console.log("No question left");
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.showScore(quiz.questions.length, quiz.correctAnswerCount);
    }
});


ui.btn_quit.addEventListener("click", function () {
    window.location.reload();
});

ui.btn_replay.addEventListener("click", function () {
    quiz.questionIndex = 0;
    quiz.correctAnswerCount = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
   

});

function optionSelected(option) {
    clearInterval(counter);
    let ans = option.querySelector("span b").textContent;
    let q = quiz.getQuestion();   
    ui.btn_next.classList.add("show");
    // const nxtButton = document.querySelector(".next_btn").classList.add("show");

    if (q.isCorrectAnswer(ans)) {
        quiz.correctAnswerCount += 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",ui.correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend",ui.inCorrectIcon);

    }
    for (let i = 0; i < ui.option_list.children.length; i++){
        ui.option_list.children[i].classList.add("disabled");
    }
}

let counter;

function startTimer(time) {
    counter=setInterval(timer, 1000);

    function timer() {
        ui.time_second.textContent = time;
        time--;
        if (time < 0) {
            clearInterval(counter);
            ui.time_text.textContent = "Time's up"

            let ans = quiz.getQuestion().answer;

            console.log(ans);
            
            for (let option of ui.option_list.children) {
                // console.log(o ption)
                if (option.querySelector("span b").textContent == ans) {
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }
                option.classList.add("disabled");
                ui.btn_next.classList.add("show");
            }            
        }
    }    
}

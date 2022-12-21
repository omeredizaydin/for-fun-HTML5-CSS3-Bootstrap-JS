function Question(questionString, options, answer) {
    this.questionString = questionString;
    this.options = options;
    this.answer = answer;    
}

Question.prototype.isCorrectAnswer=function (answer) {
    return answer === this.answer;
}
let questions = [
    new Question("1-Which one is a javascript packet management application", { a: "NodeJS", b: "Typescript", c: "npm", d:"NuGet"}, "c"),
    new Question("2-Which one is not a frontend technology", { a: "CSS", b: "HTML", c: "Javascript", d:"SQL" }, "d"),
    new Question("3-Which one is  a backend technology", { a: "NodeJS", b: "Typescript", c: "Angular", d:"React" }, "a"),
    new Question("4-Which one does not use Javascript programming language", { a: "React", b: "Angular", c: "VueJS",d:"ASP.NET" }, "d")
];
// Question.prototype.numOfCorrectAnswers = function () {
//     if (this.isCorrectAnswer) {
//         this.correctAns += 1;
//     }
// }
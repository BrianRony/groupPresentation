const quiz = document.getElementById("quiz");
const answersA1 = document.querySelectorAll(".answer");
const questionA1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbtn = document.getElementById("submit");

let currentQuiz = 0
let totalScore = 0

loadQuiz()

function loadQuiz(){
     
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionA1.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers(){
    answersA1.forEach(answersA => answersA.checked = false)
}
function getSelected(){
    let answer
    answersA1.forEach(answersA1 => {
        if(answersA1.checked){
            answer = answersA1.id
        }
    })
    return answer
}

submitbtn.addEventListener("click", ()=> {
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            totalScore++
        }
        currentQuiz++
        if(currentQuiz<quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2> You answered ${totalScore}/${quizData.length} questions correctly</h2>

            <button onclick = "location.reload()"> Reload </button>
            `
        }
    }
})
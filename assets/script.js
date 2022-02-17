var startBtn = document.querySelector('#start-btn')
var question = document.querySelector('#question')
var answers = document.querySelector('#answers')
var currentScore = document.querySelector('#currentScore')
var score = 0

function quiz() {
    var availableQs = ['What is the best flavor of ice-cream?', 'Who is the best actor?', 'What are you wearing?', 'Why would I ask that?']
    var answersOne = ['Chocolate', 'Vanilla', 'Mint', 'Strawberry']
    var answersTwo = ['Dwane Johnson', 'John Cena', 'Brock Lesner', 'Kane']

    question.textContent=availableQs[0]
    
    for (i = 0; i < answersOne.length; i++) {
    
        var selectableAnswer = document.createElement('li')
        var selectableAnswerBtn = document.createElement('button')
    
        answers.appendChild(selectableAnswer)
    
        selectableAnswer.appendChild(selectableAnswerBtn)
    
        selectableAnswerBtn.textContent=answersOne[i]
    
        selectableAnswerBtn.addEventListener('click', function(event) {
            event.preventDefault();
    
            // console.log(event)
    
            if (event.target.textContent === "Chocolate") {
                window.alert('Nice!')
                score++
                currentScore.textContent=score
    
            }
            else {
                window.alert('Not right...')
            }
        })
    
    }

    question.textContent=availableQs[1]
    
    for (i = 0; i < answersTwo.length; i++) {
    
        var selectableAnswer = document.createElement('li')
        var selectableAnswerBtn = document.createElement('button')
    
        answers.appendChild(selectableAnswer)
    
        selectableAnswer.appendChild(selectableAnswerBtn)
    
        selectableAnswerBtn.textContent=answersTwo[i]
    
        selectableAnswerBtn.addEventListener('click', function(event) {
            event.preventDefault();
    
            // console.log(event)
    
            if (event.target.textContent === "Kane") {
                window.alert('Nice!')
                score++
                currentScore.textContent=score
    
            }
            else {
                window.alert('Not right...')
            }
        })
    
    }
}    

    
startBtn.addEventListener('click', function(event) {
    event.preventDefault();

    question.textContent=''
    startBtn.style.display='none'
    
    quiz()
})
var startBtn = document.querySelector('#start-btn')
var question = document.querySelector('#question')
// var answerOne = document.querySelector('#answerOne')
// var answerTwo = document.querySelector('#answerTwo')
// var answerThree = document.querySelector('#answerThree')
// var answerFour = document.querySelector('#answerFour')
var currentScore = document.querySelector('#currentScore')
var answers = document.querySelector('#answers')
var answerList = document.querySelector('#gamebox')
var score = 0
var acceptableAnwers = ["Yoshi", "Waffles", "Pit Bull", "It didn't have to be"]
var questions = ["What is the best Super Mario Character?", "What is the best breakfast food?", "Who is Mr. Worldwide?", "Why was this so hard?"]
var firstAnswer = ["Mario", "Sausage", "Snoop Doggy Dog", "That's js baybay"]
var secondAnswer = ["Luigi", "Pancakes", "Tech Nine", "It didnt have to be"]
var thirdAnswer = ["Yoshi", "Cereal", "Kane", "It really wasn't THAT hard"]
var fourthAnswer = ["Toad", "Waffles", "Pit Bull", "Dude....."]
var questionIndex = 0
var answerKey = 0
var timeLeft = 30

function checkTime() {
    if (timeLeft <= 0) {
        timerDisplay.style.display='none'
        answerList.removeChild('ul')
        question.textContent="TIMES UP!"
    }
}



function timerCount() {

    var timerDisplay = document.querySelector('#timer')
    timerDisplay.textContent=timeLeft
    timeLeft--
    checkTime()
}



function FirstQuestion() {

    question.textContent=questions[questionIndex]
    // answers.style.display='block'
    // answerOne.textContent=firstAnswer[questionIndex]
    // answerTwo.textContent=secondAnswer[questionIndex]
    // answerThree.textContent=thirdAnswer[questionIndex]
    // answerFour.textContent=fourthAnswer[questionIndex]
    var answerOne = document.createElement('li')
    var answerTwo = document.createElement('li')
    var answerThree = document.createElement('li')
    var answerFour = document.createElement('li')
    var answerOneBtn = document.createElement('button')
    var answerTwoBtn = document.createElement('button')
    var answerThreeBtn = document.createElement('button')
    var answerFourBtn = document.createElement('button')

    answerOneBtn.setAttribute('class', 'answerBtn')
    answerTwoBtn.setAttribute('class', 'answerBtn')
    answerThreeBtn.setAttribute('class', 'answerBtn')
    answerFourBtn.setAttribute('class', 'answerBtn')

    answers.appendChild(answerOne)
    answerOne.appendChild(answerOneBtn)
    answerOneBtn.textContent=firstAnswer[questionIndex]
    answers.appendChild(answerTwo)
    answerTwo.appendChild(answerTwoBtn)
    answerTwoBtn.textContent=secondAnswer[questionIndex]
    answers.appendChild(answerThree)
    answerThree.appendChild(answerThreeBtn)
    answerThreeBtn.textContent=thirdAnswer[questionIndex]
    answers.appendChild(answerFour)
    answerFour.appendChild(answerFourBtn)
    answerFourBtn.textContent=fourthAnswer[questionIndex]

    var answerBtn = document.querySelectorAll('.answerBtn')

    

    for (i = 0; i < answerBtn.length; i++){

        answerBtn[i].addEventListener('click', function(event) {
                event.preventDefault();
        
                if (this.textContent === acceptableAnwers[answerKey]) {
                    window.alert('Nice!')
                    score++
                    answerKey++
                    questionIndex++
                    currentScore.textContent=score
                    answers.innerHTML=""
                    FirstQuestion()
                }
                else {
                    window.alert('Not right...')
                    answerKey++
                    questionIndex++
                    answers.innerHTML=""
                    FirstQuestion()
                }
            })
    }
}
   

    
startBtn.addEventListener('click', function(event) {
    event.preventDefault();
    question.textContent=''
    startBtn.style.display='none'
    var timer = setInterval(timerCount, 1000)
    FirstQuestion()
})
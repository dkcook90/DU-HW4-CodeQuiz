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
var acceptableAnwers = ["Yoshi", "Waffles", "Pit Bull", "It didn't have to be", "The Two Towers", "The Rockies", "The Rockies"]
var questions = ["What is the best Super Mario Character?", "What is the best breakfast food?", "Who is Mr. Worldwide?", "Why was this so hard?", "What is the best LOTR movie?", "Who is the worst team in the MLB?", "Who is the best team in the MLB?"]
var firstAnswer = ["Mario", "Sausage", "Snoop Doggy Dog", "That's js baybay", "The Two Towers", "The Rockies", "The Marlins"]
var secondAnswer = ["Luigi", "Pancakes", "Tech Nine", "It didnt have to be", "Return of the King", "The Dodgers", "The Diamondbacks"]
var thirdAnswer = ["Yoshi", "Cereal", "Kane", "It really wasn't THAT hard", "The Fellowship", "The Twins", "The Rays"]
var fourthAnswer = ["Toad", "Waffles", "Pit Bull", "Dude.....", "The Battle of Five Armys", "The Padres", "The Mariners"]
var questionIndex = 0
var answerKey = 0
var timeLeft = 30

function endGame() {
    var initials = window.prompt('Please enter your initials:')
    question.textContent='High Scores'
    var highscoreInput = document.createElement('li')
    var highscoreList = document.createElement('ul')
    answerList.appendChild(highscoreList)
    highscoreList.appendChild(highscoreInput)
    highscoreInput.textContent=initials + ' ' + localStorage.getItem('Score')
}

function checkTime(timerDisplay) {
    if (timeLeft <= 0) {
        timerDisplay.style.display='none'
        currentScore.style.display='none'
        answerList.removeChild(answers)
        question.textContent="TIMES UP!"
        localStorage.setItem('Score', score)
        endGame()
    }
}


function timerCount() {

    var timerDisplay = document.querySelector('#timer')
    timerDisplay.textContent=timeLeft
    timeLeft--
    checkTime(timerDisplay)
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
                    timeLeft -= 10
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
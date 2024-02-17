let myRollBtn = document.getElementById('rollBtn')
let myResetBtn = document.getElementById('resetBtn')
let playerOneImg = document.getElementById('playerOneImage')
let playerTwoImg = document.getElementById('playerTwoImage')
let playerOneTitle = document.getElementById('playerOneTitle')
let playerTwoTitle = document.getElementById('playerTwoTitle')
let mainTitle = document.getElementById('title')
let enterUrName = document.getElementById('inputUrName')


// user input his name

// let userNameInput = prompt('Enter your name: ')
// playerOneTitle.textContent = userNameInput

// let secondUserNameInput = prompt('Enter your name: ')
// playerTwoTitle.textContent = secondUserNameInput


// images list
let imagesArr = ['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png']

let randomImg1;
let randomImg2;

//take random image
myRollBtn.addEventListener('click', function(){
    randomImg1 = Math.floor(Math.random() * imagesArr.length)
    playerOneImg.src = imagesArr[randomImg1]
})    

myRollBtn.addEventListener('click', function(){
    randomImg2 = Math.floor(Math.random() * imagesArr.length)
    playerTwoImg.src = imagesArr[randomImg2]
})    

myRollBtn.addEventListener('click', function() {
    if(randomImg1 > randomImg2) {
        mainTitle.textContent = `🏆${playerOneTitle.textContent} win this round`
        
    } else if(randomImg2 > randomImg1) {
        mainTitle.textContent = `${playerTwoTitle.textContent} win this round🏆`
    } else if(randomImg1 === randomImg2) {
        mainTitle.textContent =  'TIE'
    }    
})    

// myRollBtn.addEventListener('click', function() {})




// reset button

myResetBtn.addEventListener('click', function() {
    playerOneTitle.textContent = 'player 1'
    playerTwoTitle.textContent = 'player 2'
    playerOneImg.src = imagesArr[0]
    playerTwoImg.src = imagesArr[0]
    mainTitle.innerHTML = 'Dice Game'
    
})


// enter ur name button

enterUrName.addEventListener('click', function() {
    let enterUrNameAfterClick = prompt('Enter your name')
    playerOneTitle.textContent = enterUrNameAfterClick
     
    let enterUrNameAfterClick2 = prompt('Enter your name')
    playerTwoTitle.textContent = enterUrNameAfterClick2
})



// isNum()
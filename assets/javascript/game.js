let theChoices = ["a" , "b" , "c", "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"]

let winner = 0;
let loser = 0;
let guessesLeft = 10;
let guessedAlready = [];

let randomLetter = theChoices[Math.floor(Math.random() * theChoices.length)]

function restart() {
  guessedAlready = []
    guessesLeft = 10;
    randomLetter = theChoices[Math.floor(Math.random() * theChoices.length)];
    document.getElementById("guessesLeft-text").innerHTML = guessesLeft
}
function winsUp() {
    winner++
    swal("IM SO PROUD OF YOU FOR WINNING!")
    document.getElementById("wins-text").innerHTML = winner
    restart()
}
function lossesUp() {
        loser++
        document.getElementById("losses-text").innerHTML = loser
        swal("YOU LOSER! Your computer will self destruct")
        restart()
}
function youGuessed() {
    let player = String.fromCharCode(event.keyCode).toLowerCase()
    guessedAlready.push(player)
    document.getElementById("guessedAlready-text").innerHTML = guessedAlready
}
document.onkeydown = function() {
    let letterGuessed = String.fromCharCode(event.keyCode).toLowerCase()
    youGuessed()
    
    if (letterGuessed === randomLetter) {
        winsUp()
      } else {
        guessesLeft--;
        document.getElementById("guessesLeft-text").innerHTML = guessesLeft        
      }
      if (guessesLeft === 0) {
          lossesUp()
      }
 }    
        


              
    

    


        

   





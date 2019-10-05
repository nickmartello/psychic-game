var theChoices = ["a" , "b" , "c", "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"]
console.log(theChoices)

var winner = 0;
var loser = 0;
var guessesLeft = 10;
var guessedAlready = [];



var randomLetter = theChoices[Math.floor(Math.random() * theChoices.length)]
console.log(randomLetter)

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
    var player = String.fromCharCode(event.keyCode).toLowerCase()
    guessedAlready.push(player)
    document.getElementById("guessedAlready-text").innerHTML = guessedAlready
}
document.onkeydown = function() {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase()
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
      $( document ).ready(function() {

        var focusTextField = function(){
          console.log("focusElement");
        };
      
        var onKeypressHandler = function(){
          console.log("* * * keypress event handler")
          $('#search_input').blur().focus();
        };
      
        var onClickHandler = function() {
          $('.btn_abc').trigger('keypress');
        };
      
        $('#search_input').bind('focus', focusTextField);
        $('.btn_abc').bind('click', onClickHandler);
        $('.btn_abc').bind('keypress', onKeypressHandler);
      
      });
    }    
        


              
    

    


        

   





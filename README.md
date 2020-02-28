To Play https://nickmartello.github.io/psychic-game/

# THE PSYCHIC GAME

This is the first javascript project that was required in the class. It's a game using built in javascript functions such as...
* math.random
* fromCharCode
* getElementById
* Math.floor
* .length
* onkeyup

This assignment may be the most basic/simple given in the course but it was the first time we got to see what javascript could do.

## RULES OF THE GAME

Randomly pick letters until you've guessed the correct one.
```javascript
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
     


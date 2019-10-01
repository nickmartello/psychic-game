var theChoices = ["a" , "b" , "c", "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"]
console.log(theChoices)

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedAlready = [];

var randomLetter = theChoices[Math.floor(Math.random() * theChoices.length)]
console.log(randomLetter)

document.onkeypress = function() {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase()
  if (letterGuessed === randomLetter) 
  document.getElementById("win").innerHTML = "PLEASE FUCKING WORK";
  else document.getElementById("win").innerHTML
    console.log(randomLetter) }
  

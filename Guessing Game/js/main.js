// JavaScript Document
/* jslint browser:true */
"use strict";


/*---Header---*/

document.getElementById("header").innerHTML = "Take A Guess";

/*---Subheader---*/
document.getElementById("subheader").innerHTML = "The Best Guessing Game Around!";


/*---Generate a Random Number-----*/






var randomNumber = Math.floor(Math.random() * (15- 1 + 1)) + 1; 
var counter = 0;


function guessingGame(){
    
    
    
    var input = document.getElementById("userInput").value;
    
    var maxNumber = 15;
   
 

    
    if (input > maxNumber){
        document.getElementById("response").innerHTML = "Remember to keep your guess between 1 and 15."
        
    }
    
    else if (input < randomNumber){
        document.getElementById("response").innerHTML = "You're too low! Guess again";
        
        
    }
    else if (input > randomNumber) {
     
     document.getElementById("response").innerHTML = "You're too High! Guess again.";
        
        
    }
         
     else if (input == randomNumber){
        document.getElementById("response").innerHTML = "You guessed it! Good work. It took you " + counter + " attempt(s) to get it right.";
        
        
        ribbons();
         
     } 
    

}

function ribbons(){
   
switch(true){
        //Blue Ribbon
    case (counter <= 3):
        document.getElementById("first").style.display = "block";
        document.getElementById("ribbonAttempts").innerHTML = counter + " Total Attempts";
        break;
     
        //Red Ribbon
    case (counter <= 6):
        document.getElementById("second").style.display = "block";
        document.getElementById("ribbonAttempts").innerHTML = counter + " Total Attempts";
        break;
        //Silver Ribbon
    case (counter >= 7):
        document.getElementById("third").style.display = "block";
        document.getElementById("ribbonAttempts").innerHTML = counter + " Total Attempts";
        break;

             }
              }

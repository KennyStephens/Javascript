// JavaScript Document
/* jslint browser:true */
"use strict";


/*---Header---*/

document.getElementById("header").innerHTML = "The Fortune Teller";

/*---Subheader---*/
document.getElementById("subheader").innerHTML = "100% Accurate Tellings";


/*---Generate a Random Number-----*/








function fortune(){
     var randomMonth = Math.floor(Math.random() * (12- 1 + 1)) + 1;
    var randomDay = Math.floor(Math.random() * (30- 1 + 1)) + 1;
    var randomMessage = Math.floor(Math.random() * (5- 1 + 1)) + 1;
    
     switch(true){
        case (randomMessage == 1):
            var randomMessage = "you will receive a lifetime of free pizza.";
            break;
            case (randomMessage == 2):
            var randomMessage = "you will fall into a manhole.";
            break;
            case (randomMessage == 3):
            var randomMessage = "you will adopt a kitten.";
            break;
            case (randomMessage == 4):
            var randomMessage = "you will inherit a zoo.";
            break;
            case (randomMessage == 5):
            var randomMessage = "you will meet the love of your life.";
            break;
            
            
            
            
               }
    
    switch(true){
            
        case (randomMonth == 1):
            document.getElementById("month").innerHTML = "On January " + randomDay + ", " + randomMessage;
           
            break;
              case (randomMonth == 2):
            document.getElementById("month").innerHTML = "On February " + randomDay + ", " + randomMessage;
            
            break;
              case (randomMonth == 3):
            document.getElementById("month").innerHTML = "On March " +  randomDay + ", " + randomMessage;
            
            break;
              case (randomMonth == 4):
            document.getElementById("month").innerHTML = "On April " + randomDay + ", " + randomMessage;
            
            break;
              case (randomMonth == 5):
            document.getElementById("month").innerHTML = "On May " + randomDay + ", " + randomMessage;
           
            break;
              case (randomMonth == 6):
            document.getElementById("month").innerHTML = "On June " + randomDay + ", " + randomMessage;
            
            break;
              case (randomMonth == 7):
            document.getElementById("month").innerHTML = "On July " + randomDay + ", " + randomMessage;
           
            break;
              case (randomMonth == 8):
            document.getElementById("month").innerHTML = "On August " + randomDay + ", " + randomMessage;
           
            break;
              case (randomMonth == 9):
            document.getElementById("month").innerHTML = "On September " + randomDay + ", " + randomMessage;
            
            break;
              case (randomMonth == 10):
            document.getElementById("month").innerHTML = "On October " + randomDay + ", " + randomMessage;
            
            break;
              case (randomMonth == 11):
            document.getElementById("month").innerHTML = "On November " + randomDay + ", " + randomMessage;
            
            break;
              case (randomMonth == 12):
            document.getElementById("month").innerHTML = "On December " + randomDay + ", " + randomMessage;
           
            break;
            
        
         }
    
   
    
    
    
}


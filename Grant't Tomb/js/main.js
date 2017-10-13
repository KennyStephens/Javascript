// JavaScript Document
/* jslint browser:true */
"use strict";


/*---Header---*/

document.getElementById("header").innerHTML = "Sherlock Holmes Quiz";

/*---Subheader---*/
document.getElementById("subheader").innerHTML = "Who made it all possible?";

/*-----Assignment-----*/

var myObject = {
    
    question:"Who created the character Sherlock Holmes?",
    answer1:"Earnest Hemingway",
    answer2:"Sir Arthur Conan Doyle",
    answer3:"Mark Twain",
    answer4:"Jane Austen",
    correct:2,
    
    content: function() {
        
        document.getElementById("question").innerHTML = myObject.question;
        
        document.getElementById("answer1").innerHTML = myObject.answer1;
        
        document.getElementById("answer2").innerHTML = myObject.answer2;
        
        document.getElementById("answer3").innerHTML = myObject.answer3;
        
        document.getElementById("answer4").innerHTML = myObject.answer4;
    },
    
    check: function(x){
        if(x==myObject.correct){
            document.getElementById("feedback").innerHTML = "That's correct!";
        } else{
            document.getElementById("feedback").innerHTML =
                "Oops. Try again.";
        }
        
        
        
        
        
        
    }
    
    
    
    
    
    
}





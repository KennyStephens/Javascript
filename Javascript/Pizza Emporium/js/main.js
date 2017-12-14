// JavaScript Document
/* jslint browser:true */
"use strict";


/*---Header---*/

document.getElementById("header").innerHTML = "The Pizza Emporium";

/*---Subheader---*/
document.getElementById("subheader").innerHTML = "A little slice of Italy";

/*-----Assignment-----*/

var pizza = {
    crust: "",
    topping: "",
    size: "",
    flour: "",
    ingredients: "",
    
    
    makePizzaOutput: function() {
        var makePizza = "You've made a " + pizza.size + " pizza with " + pizza.topping + ". It has " + pizza.crust + " crust.";
        
        document.getElementById("feedback").innerHTML = makePizza; 
    },//End of method 
 

    shoppingListOutput: function(){
        var shoppingList = "You need the following ingredients: " + pizza.flour + " of flour, " + pizza.ingredients +".";
        
        document.getElementById("feedback").innerHTML = shoppingList;
        
    },
 
    
    
}; //End of object






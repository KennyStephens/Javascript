// JavaScript Document
/* jslint browser:true */
"use strict";

/*---User Name---*/
var userName = prompt("What's your name?");

var mycup = "Hello " + userName + "!";
document.getElementById("message").innerHTML = mycup;

/*---Header---*/

document.getElementById("header").innerHTML = "Kenny's Bed and Breakfast";

/*---Subheader---*/
document.getElementById("subheader").innerHTML = "The Best Stop in Town!";


/*---Date---*/
var myDateString = new Date();

document.getElementById("date").innerHTML = myDateString



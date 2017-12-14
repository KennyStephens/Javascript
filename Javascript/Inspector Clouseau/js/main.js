// JavaScript Document
/* jslint browser:true */
"use strict";


/*---Header---*/

document.getElementById("header").innerHTML = "Sherlock Holmes Bookstore";

/*---Subheader---*/
document.getElementById("subheader").innerHTML = "The Game is Afoot";


/*---Window Size---*/

function myWindowResize(){
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var bucket = "My Window Width is "+ windowWidth +" Wide." +" My Window Height is "+ windowHeight +" tall.";
document.getElementById("windowSize").innerHTML = bucket;
    }
myWindowResize();

/*---Top-Left Offset---*/

document.getElementById("offset").innerHTML = "My Window is "+ screenLeft + " from the left and " + screenTop + " from the top.";


/*---Display Page URL---*/
document.getElementById("url").innerHTML = "My URL is " +window.location.href;


/*---Document Title---*/
document.getElementById("documentTitle").innerHTML = "My Document Title is "+ document.title;

/*---Last Updated---*/
document.getElementById("updated").innerHTML = "My Site was Last Updated " + document.lastModified;
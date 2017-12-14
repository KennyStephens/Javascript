// JavaScript Document
/*jslint browser:true */
"use strict";

var locationCheck = location.href;


//home page
var homeArray = locationCheck.split(/[/,?]/);


var numberOfPartsHome = homeArray.length;


var homePieceIWant = homeArray[numberOfPartsHome - 2];





//location page
var locationPageArray = locationCheck.split(/[#,/]/);


var numberOfPartsLocation = locationPageArray.length;


var locationPieceIWant = locationPageArray[numberOfPartsLocation - 2];





//drill page
var drillArray = locationCheck.split('/');


var numberOfPartsDrill = drillArray.length;


var drillPieceIWant = drillArray[numberOfPartsDrill - 1];



//hammer page
var hammerArray = locationCheck.split('/');


var numberOfPartsHammer = hammerArray.length;


var hammerPieceIWant = hammerArray[numberOfPartsHammer - 1];




//find a match
var menuAnchors = document.querySelectorAll("ul#mainmenu li a");


var i;
for (i = 0; i < menuAnchors.length; i++) {
    var myPage = menuAnchors[i].getAttribute("href").split(/[?,#]/);



    if (hammerPieceIWant === myPage[0]) {

        menuAnchors[i].parentNode.className = "active";
        menuAnchors[i].parentNode.parentNode.parentNode.className = "parent";

    } else if (locationPieceIWant === myPage[0]) {
        menuAnchors[i].parentNode.className = "parent";

    } else if (homePieceIWant === myPage[0]) {
        menuAnchors[i].parentNode.className = "parent";
    } else {
        menuAnchors[i].parentNode.className = "";
    }
} //end loop

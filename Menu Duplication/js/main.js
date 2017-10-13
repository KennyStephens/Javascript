/*jslint browser:true */
"use strict";

var navGet = document.querySelectorAll('ul#primaryNavigation li a');





function menuDuplication() {


    var i;
    for (i = 0; i < navGet.length; i++) {
        var unorderedList = document.createElement("UL");
        var listItem = document.createElement("LI");
        var anchor = document.createElement("A");
        var link = navGet[i].getAttribute('href');
        var linkText = navGet[i].text;

        anchor.setAttribute('href', link);
        anchor.innerHTML = linkText;

        document.getElementById('smallNavArea').appendChild(unorderedList);
        unorderedList.appendChild(listItem);
        listItem.appendChild(anchor);


    }
}

menuDuplication();









//Run loop and have it write every item in the navGet array

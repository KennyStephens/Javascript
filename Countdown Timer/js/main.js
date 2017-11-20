/*jslint browser:true */
'use strict';

var timer;




function countdownTimer() {
    clearInterval(timer);

    var countdownMonth = document.getElementById("month").value;
    var countdownDay = document.getElementById("day").value;
    var countdownYear = document.getElementById("year").value;
    var countdownHour = document.getElementById("hour").value;
    if (countdownHour == "") countdownHour = 0; //if the user leaves this field blank
    var countdownMin = document.getElementById("min").value;
    if (countdownMin == "") countdownMin = 0; //if the user leaves this field blank


    var countdownDate = countdownMonth + "/" + countdownDay + "/" + countdownYear + " " + countdownHour + ":" + countdownMin;
    var finish = new Date(countdownDate);
    var current = new Date();
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;


    function showCountdown() {
        var current = new Date();
        var remain = finish - current;
        if (remain < 0) {
            clearInterval(timer);
            document.getElementById("countdown-output").innerHTML = 'Times Up!';
            return;
        }
        var days = Math.floor(remain / day);
        var hours = Math.floor((remain % day) / hour);
        var minutes = Math.floor((remain % hour) / minute);
        var seconds = Math.floor((remain % minute) / second);

        document.getElementById("countdown-output").innerHTML = days + ' Days  ';
        document.getElementById("countdown-output").innerHTML += hours + ' Hrs  ';
        document.getElementById("countdown-output").innerHTML += minutes + ' Mins  ';
        document.getElementById("countdown-output").innerHTML += seconds + ' Secs';
    }
    timer = setInterval(showCountdown, 1000);
}

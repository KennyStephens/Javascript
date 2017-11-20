/*jslint browser:true */
"use strict";

function validateForm() {

    var status = true;

    var requiredSections = ['fullName', 'phoneNumber', 'payMethod', 'ccNumber', 'vehicle'];
    var i;
    for (i = 0; i < requiredSections.length; i++) {
        document.getElementById(requiredSections[i]).className = "normal";
    }

    //Full name
    var fullName = document.forms.myForm.fullName.value;
    if (fullName === "" || fullName === null) {
        status = false;
        document.getElementById('fullName').className = "error";
    }

    //Phone number
    var phoneNumber = document.forms.myForm.phoneNumber.value;
    phoneNumber = phoneNumber.replace(/-/g, '');

    if (phoneNumber.length < 10 || phoneNumber.length > 15) {
        status = false;
        document.getElementById('phoneNumber').className = "error";
    }

    //CC number
    var ccNumber = document.forms.myForm.ccNumber.value;
    phoneNumber = phoneNumber.replace(/ /g, '');

    if (ccNumber.length != 15) {
        status = false;
        document.getElementById('ccNumber').className = "error";
    }

    //Pay Method
    var payMethod = document.getElementsByName('payMethod');
    var foundCheckedButton = false;
    for (i = 0; i < payMethod.length; i++) {
        if (payMethod[i].checked) {
            foundCheckedButton = true;
            break;
        }
    }

    if (foundCheckedButton === false) {
        status = false;
        document.getElementById('payMethod').className = "error";
    }

    //vehicle
    var vehicle = document.forms.myForm.vehicle.selectedIndex;
    if (vehicle === 0) {
        status = false;
        document.getElementById('vehicle').className = "error";
    }



    if (status === false) {
        document.getElementById('formProblems').className = "showErrorMsg";
    }





    return status;
}

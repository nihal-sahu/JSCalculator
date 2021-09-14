var userNum1 = "0";
var userNum2 = "0";
var operation = false;
var operator;
var total;

function erase() {
    userNum1 = "0";
    userNum2 = "0";
    var operation = false;
    document.getElementById("display").innerHTML = "0";
}

function num1() {

    if (operation == true) {
        if (userNum2 == "0") {
            userNum2 = "1";
        } else {
            userNum2 = userNum2 + "1";
        }
        document.getElementById("display").innerHTML = userNum1 + operator + userNum2;
    } else {

        if (userNum1 == "0") {
            userNum1 = "1";
        } else {
            userNum1 = userNum1 + "1";
        }
        document.getElementById("display").innerHTML = userNum1;

    }
}

function num2() {
    if (operation == true) {
        if (userNum2 == "0") {
            userNum2 = "2";
        } else {
            userNum2 = userNum2 + "2";
        }
        document.getElementById("display").innerHTML = userNum1 + operator + userNum2;
    } else {

        if (userNum1 == "0") {
            userNum1 = "2";
        } else {
            userNum1 = userNum1 + "2";
        }
        document.getElementById("display").innerHTML = userNum1;

    }
}

function num3() {

    if (operation == true) {
        if (userNum2 == "0") {
            userNum2 = "3";
        } else {
            userNum2 = userNum2 + "3";
        }
        document.getElementById("display").innerHTML = userNum1 + operator + userNum2;
    } else {

        if (userNum1 == "0") {
            userNum1 = "3";
        } else {
            userNum1 = userNum1 + "3";
        }
        document.getElementById("display").innerHTML = userNum1;

    }
}

function num4() {

    if (operation == true) {
        if (userNum2 == "0") {
            userNum2 = "4";
        } else {
            userNum2 = userNum2 + "4";
        }
        document.getElementById("display").innerHTML = userNum1 + operator + userNum2;
    } else {

        if (userNum1 == "0") {
            userNum1 = "4";
        } else {
            userNum1 = userNum1 + "4";
        }
        document.getElementById("display").innerHTML = userNum1;

    }
}

function num5() {

    if (operation == true) {
        if (userNum2 == "0") {
            userNum2 = "5";
        } else {
            userNum2 = userNum2 + "5";
        }
        document.getElementById("display").innerHTML = userNum1 + operator + userNum2;
    } else {

        if (userNum1 == "0") {
            userNum1 = "5";
        } else {
            userNum1 = userNum1 + "5";
        }
        document.getElementById("display").innerHTML = userNum1;

    }
}

function num6() {

    if (operation == true) {
        if (userNum2 == "0") {
            userNum2 = "6";
        } else {
            userNum2 = userNum2 + "6";
        }
        document.getElementById("display").innerHTML = userNum1 + operator + userNum2;
    } else {

        if (userNum1 == "0") {
            userNum1 = "6";
        } else {
            userNum1 = userNum1 + "6";
        }
        document.getElementById("display").innerHTML = userNum1;

    }
}

function num7() {

    if (operation == true) {
        if (userNum2 == "0") {
            userNum2 = "7";
        } else {
            userNum2 = userNum2 + "7";
        }
        document.getElementById("display").innerHTML = userNum1 + operator + userNum2;
    } else {

        if (userNum1 == "0") {
            userNum1 = "7";
        } else {
            userNum1 = userNum1 + "7";
        }
        document.getElementById("display").innerHTML = userNum1;

    }
}

function num8() {

    if (operation == true) {
        if (userNum2 == "0") {
            userNum2 = "8";
        } else {
            userNum2 = userNum2 + "8";
        }
        document.getElementById("display").innerHTML = userNum1 + operator + userNum2;
    } else {

        if (userNum1 == "0") {
            userNum1 = "8";
        } else {
            userNum1 = userNum1 + "8";
        }
        document.getElementById("display").innerHTML = userNum1;

    }
}

function num9() {

    if (operation == true) {
        if (userNum2 == "0") {
            userNum2 = "9";
        } else {
            userNum2 = userNum2 + "9";
        }
        document.getElementById("display").innerHTML = userNum1 + operator + userNum2;
    } else {

        if (userNum1 == "0") {
            userNum1 = "9";
        } else {
            userNum1 = userNum1 + "9";
        }
        document.getElementById("display").innerHTML = userNum1;

    }
}

function num0() {
    if (operation == true) {
        if (userNum2 == "0") {
            userNum2 = "0";
        } else {
            userNum2 = userNum2 + "0";
        }
        document.getElementById("display").innerHTML = userNum1 + operator + userNum2;
    } else {

        if (userNum1 == "0") {
            userNum1 = "0";
        } else {
            userNum1 = userNum1 + "0";
        }
        document.getElementById("display").innerHTML = userNum1;

    }
}

function numdot() {
    if (operation == true) {

        userNum2 = userNum2 + ".";

        document.getElementById("display").innerHTML = userNum1 + operator + userNum2;
    } else {

        userNum1 = userNum1 + ".";

        document.getElementById("display").innerHTML = userNum1;

    }
}

function addition() {

    operation = true;
    operator = " + "

    document.getElementById("display").innerHTML = userNum1 + " + "
}

function subtraction() {

    operation = true;
    operator = " - "

    document.getElementById("display").innerHTML = userNum1 + " - "
}

function multiplication() {

    operation = true;
    operator = " &#xd7; "

    document.getElementById("display").innerHTML = userNum1 + " &#xd7; "
}


function division() {

    operation = true;
    operator = " &#xf7; "

    document.getElementById("display").innerHTML = userNum1 + " &#xf7; "
}


function equals() {

    operation = false;

    if (operator == " + ") {
        total = +userNum1 + +userNum2;

        document.getElementById("display").innerHTML = total;

        userNum1 = "0";
        userNum2 = "0";
        total = " ";
        operation = false;
    } else if (operator == " - ") {
        total = +userNum1 - +userNum2;

        document.getElementById("display").innerHTML = total;

        userNum1 = "0";
        userNum2 = "0";
        total = " ";
        operation = false;
    } else if (operator == " &#xd7; ") {
        total = +userNum1 * +userNum2;

        document.getElementById("display").innerHTML = total;

        userNum1 = "0";
        userNum2 = "0";
        total = " ";
        operation = false;
    } else if (operator == " &#xf7; ") {
        total = +userNum1 / +userNum2;

        document.getElementById("display").innerHTML = total;

        userNum1 = "0";
        userNum2 = "0";
        total = " ";
        operation = false;
    }

}
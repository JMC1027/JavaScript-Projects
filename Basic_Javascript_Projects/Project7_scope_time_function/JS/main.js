//Assignment
var a = 20; // **Global** (The Variable was assigned outside the function)
function Multiply_numbers_1() {
    document.write(a * 2 + "<br>");
}
Multiply_numbers_1();

function Divide_numbers_1() { //**Local** (The variable was assigned inside the function)
    var b = 25;
    document.write(b / 5);
}
Divide_numbers_1();

function getHours() { //Fucntion getHours is less thn 18, button will display "Military Time!" when clicked
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "Military Time!";
    }
}

function Time_function() { //Depnding on the time of day will determne what message is delived upon clicking the button
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon";
    }
    else {
        Reply = "it is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
function addition_Function() {
    var x = 3;
    var addition = x + 2;
    document.getElementById("Math").innerHTML = "x + 2 = " + addition;
    console.log(5);
}
function count_To_Twenty() { //While Loop
    var Digit = "";
    var x =  1;
    while (x < 20) {
        Digit += "<br>" + x;
        x++
    }
    document.getElementById("Counting_to_Twenty").innerHTML = Digit;
}

var Teams = ["Islanders", "Raiders"];//For loop
var Content = "";
var y;
function for_Loop() {
    for (y = 0; y < Teams.length; y++) {
        Content += Teams[y] + "<br>";
    }
    document.getElementById("List_of_Teams").innerHTML = Content
}

function player_moves() {
    var Player_Moves = [];
    Player_Moves[0] = "skating";
    Player_Moves[1] = "shooting";
    Player_Moves[2] = "passing";
    Player_Moves[3] = "scoring";
    document.getElementById("Player").innerHTML = "During the game, the player is " + Player_Moves[2] + "."
}

var x = 2;
document.write(x);
{
    let x = 4;
    document.write("<br>" + x);
}
document.write("<br>" + x);

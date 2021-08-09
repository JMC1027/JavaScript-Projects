function Sport_Function() {
    var Sport_Output;
    document.getElementById("Sport_Input").value;
    var Sport_String = "Is a great sport.";
    switch(Sport_Function) {
        case "Hockey":
            Sport_Output = "Hockey" + Sport_String;
        break;
        case "Football":
            Sport_Output = "Football" + Sport_String;
        break;
        case "Baseball":
            Sport_Output = "Baseball" + Sport_String;
        break;
        case "Basketball":
            Sport_Output = "Basketball" + Sport_String;
        break;
        default:
        Sport_Output = "Please enter a sport exactly as written on the above list. "
    }
    document.getElementById("Sport_Output").innerHTML = Sport_Output;
}
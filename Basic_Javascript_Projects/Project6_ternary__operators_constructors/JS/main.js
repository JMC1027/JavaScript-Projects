function Drive_Function() { //Ternary operation
    var Drive, Can_drive;
    Age = document.getElementById("Drive").value;
    Can_Drive = (Age >= 17) ? "You are of age":"You are too young";
    document.getElementById("Can_drive").innerHTML = Can_Drive + " to drive";
}
function Continent(Country, State, Town) { //Constructor function 
    this.Continent_Country = Country;
    this.Continent_State = State;
    this.Continent_Town = Town;
}
var Joe = new Continent("America", "New York", "Holbrook");
function my_Function() {
    document.getElementById("New_and_This").innerHTML ="Joe lives in " + Joe.Continent_Country +" " + Joe.Continent_State +" " +  Joe.Continent_Town;
}
function count_function() { //Nested function, the return value will be 4
    document.getElementById("Counting").innerHTML = Count();
    function Count () {
        var Starting_point = 2;
        function Plus_two() {Starting_point += 2;}
        Plus_two();
        return Starting_point;
    }
}
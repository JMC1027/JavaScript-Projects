function Drive_Function() {
    var Drive, Can_drive;
    Age = document.getElementById("Drive").value;
    Can_Drive = (Age > 17) ? "You are too young":"You are of age";
    document.getElementById("Drive").innerHTML = Can_drive + " to drive";
}
function Continent(Country, State, Town) {
    this.Continent_Country = Country;
    this.Continent_State = State;
    this.Continent_Town = Town;
}
var Joe = new Continent("America" "New York", "Holbrook");
function myFunction() {
    document.getElementById("New_and_This").innerHTML ="Joe lives in " + Joe.Continent_Country + "America " + Joe.Continent_State + "New York " + Joe.Continent_Town;
}
function count_function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count () {
        var Starting_point = 2;
        function Plus_two() {Starting_point += 2;}
        Plus_two();
        return Starting_point;
    }
}
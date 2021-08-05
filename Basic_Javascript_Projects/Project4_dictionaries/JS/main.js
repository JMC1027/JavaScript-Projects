function my_Dictionary(){ //function is called my_Dictionary
    var NHL = { //Value is defined as NHL
        Sport:"Hockey", //Key is Sport the value is Hockey, same for the following
        Conferance:"Eastern",
        Division:"Metro", 
        Team:"Islanders"
      };
      delete NHL.Division; //NHL.Division is now deleted from my dictionary and will remain undefined.
    document.getElementById("Dictionary").innerHTML = NHL.Team; //when clicked upon Islanders will display as the value.
}
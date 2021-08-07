//Assignment Submission 

function full_Sentence() { //each variable contains 1 part to a sentence
    var part_1 = "I can't ";
    var part_2 = "believe that ";
    var part_3 = "snowboard season is ";
    var part_4 = "almost here.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence; //This is where the sentence get put togehter
}

function slice_Method() { //Sliced the sentence so only the words (hockey season) displayed
    var Sentence = "I can't wait for hockey season to start.";
    var Sentence = Sentence.slice(17,31);
    document.getElementById("Slice").innerHTML = Sentence;
}

function string_Method() { //Took the variable x = 123 and returned it as a string
    var x =123;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function precision_Method() { //Set a specific length for this number so there is only 10 numbers get displayed
    var z = 12345.987654321;
    document.getElementById("Precision").innerHTML = z.toPrecision(10);
}
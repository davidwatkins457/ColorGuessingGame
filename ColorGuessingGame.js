/**
 * Created by david.watkins457 on 11/1/16.
 */
// variable that will randomly select a color for the person to guess
var randomColor = Math.floor((Math.random() * 9));
function game(){
    "use strict";
    //array
    var array = ["BLACK", "BLUE", "GRAY",
        "GREEN", "ORANGE", "PINK",
        "PURPLE", "RED", "WHITE", "YELLOW"];
    console.log(randomColor);
    //user's input
    var userchoice = document.getElementById("input").value;
    var done = false;
    var mybody;
    var set = array[randomColor];
    //When the input does not equal a color in the array
    do {
        userchoice = prompt(" Guess the color I'm thinking of:\n" +
            "Red, Blue, Green, Black, Yellow, " +
            "Purple, Orange, Pink, Gray, White" );

        if (array.indexOf(userchoice.toUpperCase()) == -1){
            //Alerting the user to let them know that
            // the color they have chosen isn't 1 of them
            alert("Sorry, I don't recognize your color \n" +
                "Please try again");
        }

        else if (array.indexOf(userchoice.toUpperCase()) > randomColor){
            //Alerting the user if their guess is higher than the random color
            alert("Sorry, your guess is not correct \n " +
                "Hint: your color is alphabetically higher than mine \n " +
                "Please try again.");
        }
        else if (array.indexOf(userchoice.toUpperCase()) < randomColor){
            //Alerting the user if their guess is higher than the random color
            alert("Sorry, your guess is not correct \n " +
                "Hint: your color is alphabetically lower than mine \n " +
                "Please try again.");
        }
        else {// Alerting the user when they are correct
            alert("Congratulations! You have guessed the color! \n" +
                "You can see the color in the background");
            mybody = document.getElementsByTagName("body")[0];
            mybody.style.backgroundColor = set;
            done = true;
        }

    } while (done == false);

    try{
        if (array.indexOf(userchoice.toUpperCase()) == -1){
            //Alerting the user to let them know that
            // the color they have chosen isn't 1 of them
            alert("Sorry, I don't recognize your color \n" +
                "Please try again");
                }
    }
    catch (error){
        console.log(error);
    }
}

let DoTheThing = function () {

    //Computer picks a number

    /* loops have three parts : control variable, control boolean expression, control increment/decrement update

    control variable - controls when the loop executes

    control boolean expression = boolean expression using the control variable which should at some point evaluate to be false

    control update = assigning a new value to the control variable inside the loop to that eventually evaluate to false
     */


    let restart = "Yes";
    while(restart === "Yes"){

        let computerNumber = Math.floor((Math.random()*10)+1);

        //Alert to get players guess
        let playersGuess = parseInt(prompt("Enter a number between 1 and 10"), 10;

        while(playersGuess !== computerNumber){

            if (playersGuess > computerNumber){
                playersGuess = parseInt(prompt("Too high guess again."), 10);
            }else
                playersGuess = parseInt(prompt('Too low, guess again.'), 10);
        }

        alert("YOU GUESSED IT!!!");

        restart = prompt("Would you like to play again? Type 'Yes' or 'No' (case sensitive) ");
    }
};

let DoTheOtherThing = function (){

    //Same problem with a do-while loop
    let restart;

    do {
        let computerNumber = Math.floor((Math.random()*10)+1);
        let playersGuess;
            do{
                let playersGuess = parseInt(prompt("Enter a number between 1 and 10"), 10;
                
                if (playersGuess > computerNumber){
                playersGuess = parseInt(prompt("Too high guess again."), 10);
                }else
                    playersGuess = parseInt(prompt('Too low, guess again.'), 10);

            }while(playersGuess !== computerNumber);

        restart = prompt("Would you like to play again? Type 'Yes' or 'No' (case sensitive) ");

    } while (restart === "YES");

};




    //Alert to get players guess
    //Compare guess to number
    // if higher = Alert too high and then get player's guess = repeat
    // if lower = Alert too low and then get player's guess = repeat
    // If equal = Alert you win ask to restart
    // If yes = repeat from beginning
    // If no = set computer on fire and escape


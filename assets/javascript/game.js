var computerChoices = ["a", "b", "c", "d", "e","f","g", "h", "i", "j", "k","l","m", "n", "o", "p", "q","r","s", "t", "u", "v", "w","x","y","z"];



    // Creating variables to hold the number of wins, losses, and guesses made. They start at 0 except for guesses left.

    var wins = 0;

    var losses = 0;

    var guessesLeft = 9;
    
    var guessesMade = [];

    // Create variables that hold references to the places in the HTML where we want to display things.
    var computerChoiceText = document.getElementById("computerChoice-text");

    var userChoiceText = document.getElementById("userChoice-text");
    
    var winsText = document.getElementById("wins-text");

    var lossesText = document.getElementById("losses-text");

    var guessesLeftText = document.getElementById("guessesLeft-text");

    var guessesMadeText = document.getElementById("guessesMade-text");

    winsText.textContent = " " + wins;

    lossesText.textContent = " " + losses;
    
    guessesLeftText.textContent = " " + guessesLeft;


    // This function is run whenever the user presses a key.

    document.onkeyup = function(event) {



      // Determines which key was pressed.

      var userGuess = event.key;
      guessesMade.push(userGuess);
      console.log(guessesMade);
      console.log(userGuess);


      // Randomly chooses a choice from the options array. This is the Computer's guess.

      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



        if (userGuess === computerGuess) {

          wins++;
          guessesLeft = 9;
          guessesMade = [];
       
        } 
        else if(guessesLeft === 1){
         losses++;
         guessesLeft = 9;
         guessesMade = [];      
       
    }

        
        else {
          guessesLeft--;
         
        }
    
    
    

        // Display Results.

        
        userChoiceText.textContent = " " + userGuess;
       
        computerChoiceText.textContent = " " + computerGuess;

        winsText.textContent = " " + wins;

        lossesText.textContent = " " + losses;

        guessesLeftText.textContent = " " + guessesLeft;

        guessesMadeText.textContent = " " + guessesMade;

    };
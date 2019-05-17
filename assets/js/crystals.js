// to begin, store these values in memory
var computerNumber = 0
var wins = 0;
var losses = 0;
var sum = 0;
var imageArray = ["./assets/images/sapphire.png","./assets/images/emerald.png","./assets/images/topaz.png","./assets/images/amethyst.png"]
var imageValue=[]
var showGameOver=false; //indicates end before reset; the flag was a Phil addition; we use it later to trick the computer into continuing to play regardless of win/loss condition

// cleans html 
$("#wins").html(" <b>"+wins);
$("#losses").html(" <b>"+losses);

// function defined: generate a random number between 19-120 and display in html.
function computerCalculation(){
  computerNumber = Math.floor(Math.random() * 101) + 19;
   $("#computerNumber").html(" " +computerNumber);
}

// function defined: when the games begins, do the following...
function startGame(){

  // resetting all items in #gembox (Isabel demonstrated why this is necessary--to prevent adding lines of gems)
  sum=0;
  $("#sum").html(" <b>"+sum);
  $("#gembox").empty();
  
  // for loop to create crystals for every index value and generate random number 1-12 for each crystal
  for (var i = 0; i < 4; i++) {

    // on the fly and locally, replace "i" values with imageCrystal to show in html <img> elements
    var imageCrystal = $("<img>");
    
    // local value: generate random numbers 1-12 for gems 
    var gemRandomNumber = Math.floor((Math.random() * 11) + 1);

    // addition of class ".crystal-image" to facilitate on-click event
    imageCrystal.addClass("crystal-image gems");

    // connecting array index to image files; console log index number instead of random number to prevent cheating ( 12 yr old made this necessary; Isabel explained how to substitute the values)
    imageCrystal.attr("src",imageArray[i]);
    console.log(imageArray[i]);

    // adding attribute "data-crystalValue" 
    imageCrystal.attr("data-crystalvalue", gemRandomNumber);

    // assign images to #gembox and assign random number to each index of array
    $("#gembox").append(imageCrystal);
  }

   // listening for click to begin sum calculation
  $(".crystal-image").on("click", function() {
    
    // storing random number for each image
    var numberFromImage = ($(this).attr("data-crystalvalue"));
    var crystalValue =  numberFromImage

    // also hidden to prevent cheating as random number is stated:: console.log(crystalValue)
    crystalValue = parseInt(crystalValue);

    // sum equals click values as addends
    sum += crystalValue;

    // displays sum in html
    $("#sum").html(" <b>"+sum);
  
    // win: calculation of clicks equals random computer number; adds +1 to "wins"
    if (sum === computerNumber  ) {
      wins++;
      $("#wins").html(" <b>"+wins);
  
      // begin game without resetting wins/losses
      showGameOver=true;
    }

    // win: calculation of clicks > random computer number; adds +1 to "losses"
    else if (sum >= computerNumber && showGameOver===false) {
      losses++;
      $("#losses").html(" <b>"+losses);
      showGameOver=true;
    }

    // independent statement next executed to restart the game at next click regardless of win/loss
    else {
      if(showGameOver===true && sum != computerNumber) {
        resetGame();
      }
    }
  });
}

// initiate only these variables at reset
function resetGame() {
  computerCalculation()
  startGame()
  sum=0;
  $("#sum").html(" <b> 0");
  showGameOver=false;
}

// initiate all variables at start
function start(){
computerCalculation()
startGame()
}

// run local scopes
start()


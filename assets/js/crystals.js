// to begin, store these values in memory
var computerNumber = 0
var wins = 0;
var losses = 0;
var sum = 0;
var imageArray = ["./assets/images/sapphire.png","./assets/images/emerald.png","./assets/images/topaz.png","./assets/images/amethyst.png"]
var imageValue=[]

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

    // connecting array index to image files; console log index number instead of random number to prevent cheating
    imageCrystal.attr("src",imageArray[i]);
    console.log(imageArray[i]);

    // adding attribute "data-crystalValue" 
    imageCrystal.attr("data-crystalvalue", i);

    // assign images to #gembox and assign random number to each index of array
    $("#gembox").append(imageCrystal);
    imageValue[i] = gemRandomNumber
  }
    // hidden to prevent cheating as random number is stated: console.log(imageValue)

  // listening for click to begin sum calculation
  $(".crystal-image").on("click", function() {
    
    // keep in data-crystalvalue the index of the array
    var index = ($(this).attr("data-crystalvalue"));
    var crystalValue = imageValue[index]

    // also hidden to prevent cheating as random number is stated:: console.log(crystalValue)
    crystalValue = parseInt(crystalValue);

    // sum equals click values as addends
    sum += crystalValue;

    // displays sum in html
    $("#sum").html(" <b>"+sum);
  
    // win: calculation of clicks equals random computer number; adds +1 to "wins"; alerts user to "win"
    if (sum === computerNumber) {
      wins++;
      $("#wins").html(" <b>"+wins);
      alert(`Nice work! You won. Your sum is: ${sum}`)
      // begin game without resetting wins/losses
      start()
     
    }

    // win: calculation of clicks > random computer number; adds +1 to "losses"; alerts user to "loss"
    else if (sum >= computerNumber) {
      losses++;
      $("#losses").html(" <b>"+losses);
      alert(`Your number is too big! You lose. Your sum is: ${sum}`)
        // begin game without resetting wins/losses
        start()
    }

  });
}

function start(){
// initiate the variables at start
  computerCalculation()
  startGame()
}

// run local scopes
start()


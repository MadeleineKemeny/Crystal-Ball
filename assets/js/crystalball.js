// defining variables
var index = ;//pick randomly from array for gemButton values (not displayed on button; only as part of "sum")
var computerNumber = ""; //pick randomly random between 1-120//
var wins = 0;
var losses = 0;
var gem1Button = w;//random number 1-10 (not displayed but added to "sum")
var gem2Button = x;//random number 1-10 (not displayed but added to "sum")
var gem3Button = y;//random number 1-10 (not displayed but added to "sum")
var gem4Button = z; //random number 1-10 (not displayed but added to "sum")
var sum = w++x++y++z; //adding as many clicks of gemButtons 1-4 made by user 

// gem array: [1,2,3,4,5,6,7,8,9,10]

// generating random computerNumber between 1-120 for user to match
function calculateComputer() {
    computerNumber = Math.floor(Math.random() * 120) + 1;
}

// events for gem-buttons (w3 demo)
document.getElementById("gem1Button").addEventListener("click", myFunction);//picks random numer 1-10 and assigns for duration until win/lose
document.getElementById("gem2Button").addEventListener("click", myFunction);//picks random numer 1-10 and assigns for duration until win/lose
document.getElementById("gem3Button").addEventListener("click", myFunction);//picks random numer 1-10 and assigns for duration until win/lose
document.getElementById("gem4Button").addEventListener("click", myFunction);//picks random numer 1-10 and assigns for duration until win/lose

// generating random numbers 1-10 for gemButtons:
function myFunction() {
    var w = Math.floor((Math.random() * 10) + 1);
    document.getElementById("gemButton1").innerHTML = w;
    var x = Math.floor((Math.random() * 10) + 1);
    document.getElementById("gemButton2").innerHTML = x;
    var y = Math.floor((Math.random() * 10) + 1);
    document.getElementById("gemButton3").innerHTML = y;
    var x = Math.floor((Math.random() * 10) + 1);
    document.getElementById("gemButton1").innerHTML = z;
  }

//adding gem1-4 Button.clicks to generate "sum")


// where to populate results at "start":
function start() {
    console.log("start")
    document.querySelector("#computerNumber").innerHTML = " "
    document.querySelector("#wins").innerHTML = " 0"
    document.querySelector("#losses").innerHTML = " 0"   //clear the "gem1-4" variables and generate new computerNumber
    document.querySelector("#sum").innerHTML = "  "
    document.querySelector("#gem1Button gem2Button gem3Button gem4Button").innerHTML = "  " //not visible
    calculateComputer()

// when to restart:
if (computerNumber === sum) {
    wins++
    document.querySelector("#wins").innerHTML = " " + wins
    restart()
  }

//if (sum > computerNumber) {
//  losses++
//  document.querySelector("#wins").innerHTML = " " + wins
//  restart()
//  }

// where to clear results with a restart:
function restart() {
    document.querySelector("#computerNumber").innerHTML = "" //generate new number if win/loss count increases
    document.querySelector("#sum").innerHTML = "  "
    document.querySelector("#gem1 gem2 gem3 gem4").innerHTML = "  " //not visible
    //document.querySelector("").innerHTML = "0"     //clear all the current variables 
    calculateComputer()
  }
  
  start()
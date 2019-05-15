

  var computerNumber = Math.floor(Math.random() * 101) + 19;

  $("#computerNumber").html(" " +computerNumber);

  var sum = 0;
  var wins = 0;
  var losses = 0;
  $("#wins").html(" <b>"+wins);
  $("#losses").html(" <b>"+losses);

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.
  var imageArray = ["./assets/images/sapphire.png","./assets/images/emerald.png","./assets/images/topaz.png","./assets/images/amethyst.png"]


  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < 4; i++) {
    var gemRandomNumber = Math.floor((Math.random() * 11) + 1);
    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image gems");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src",imageArray[i]);
    console.log(imageArray[i]);

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", gemRandomNumber);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#gembox").append(imageCrystal);
  }

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {
//    alert("clicked")
    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));

    console.log(crystalValue);
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    sum += crystalValue;


    $("#sum").html(" <b>"+sum);
    // ("New score: " + sum);

    if (sum === computerNumber) {
      wins++;
      $("#wins").html(" <b>"+wins);
     
    }

    else if (sum >= computerNumber) {
      losses++;
      $("#losses").html(" <b>"+losses);
     
    }

  });
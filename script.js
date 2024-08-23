//setting up some variables to manage throughout the game
var myTotal = 0;
var dTotal = 0;

var myCard1 =  {  };
var myCard2 =  {  };
var myCard3 =  {  };
var myCard4 =  {  };
var myCard5 =  {  };
var fileName1 = "";
var fileName2 = "";
var fileName3 = "";
var fileName4 = "";
var fileName5 = "";
var dCard1 =  {  };
var dCard1 =  {  };
var dCard3 =  {  };
var dCard4 =  {  };
var dCard5 =  {  };
var dFileName1 = "";
var dFileName2 = "";
var dFileName3 = "";
var dFileName4 = "";
var dFileName5 = "";



//This code creates the deck. I used this code:  https://devdojo.com/devdojo/create-a-deck-of-cards-in-javascript and reworked it according to my needs, adding the filenames to bring in the images.

   function card(value, name, suit, file){
  this.value = value;
  this.name = name;
  this.suit = suit;
  this.file = "Users/Administrator/OneDrive/Boot Camp/Black Jack App/images/" + name + "_of_" + suit + ".png"
};

function deck(){
  this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
  this.suits = ['hearts','diamonds','spades','clubs'];
  var cards = [];

    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.names.length; n++ ) {
            cards.push( new card( n+1, this.names[n], this.suits[s] ) );
        }
    }

    return cards;
};

//setting values for face cards - will only adjust values of aces during cardplay
var myDeck = new deck();
for (let i=0; i<myDeck.length; i++) {
  if (myDeck[i].name == "queen" || myDeck[i].name == "king" || myDeck[i].name == "jack")
  {myDeck[i].value = 10;};
  if (myDeck[i].value == 1)
    {myDeck[i].file = "ace" + "_of_" + myDeck[i].suit + ".png";
    myDeck[i].name = "ace"};
};

//Now I want to deal my cards to myself. I need to create an array with my running total
function getCard (myDeck) {
  return myDeck[Math.floor(Math.random() * 52)];};

//popping evaluation function up here so i can use it//
function evaluate(myTotal, dTotal) {
  function eval(num) {
    return 21 - num
  };      
  if((myTotal == 21) && dTotal != 21) {
    return $("#win").css("visibility", "visible");

  } else if((myTotal == 21) && (dTotal == 21)) {
    return $("#tie").css("visibility", "visible");

  } else if (dTotal == 21) {
      return  $("#lose").css("visibility", "visible");


    } else if (Math.sign(eval(myTotal)) === -1) {
     return  $("#lose").css("visibility", "visible");
    } 
  else if ((Math.sign(eval(dTotal)) === -1)) {
   return  $("#win").css("visibility", "visible");
  } else return console.log ("Game continues.")
};

$("#newG").on("click", function() {
  $(".card").each(function(index, element) {
    var $card = $(element);
    $card.empty();  });
  $(".card").each(function(index, element) {
    var $card = $(element);
    $card.css("background-color", "");});
  $("#lose").css("visibility", "hidden");
  $("#win").css("visibility", "hidden");
  $("#tie").css("visibility", "hidden");


  myTotal = 0;
  dTotal = 0;
   myCard1 =  {  };
   myCard2 =  {  };
   myCard3 =  {  };
   myCard4 =  {  };
   myCard5 =  {  };
   fileName1 = "";
   fileName2 = "";
   fileName3 = "";
   fileName4 = "";
   fileName5 = "";
   dCard1 =  {  };
   dCard1 =  {  };
   dCard3 =  {  };
   dCard4 =  {  };
   dCard5 =  {  };
   dFileName1 = "";
   dFileName2 = "";
   dFileName3 = "";
   dFileName4 = "";
   dFileName5 = "";


  //Dealing my first card

  myCard1 = getCard(myDeck);
  fileName1= "/images/" + myCard1.file;
  myTotal = myCard1.value;
  var $img = $("<img>")
      .attr("src",  fileName1)
      .width(50)
      .appendTo("#m1");
  $("#m1").css("background-color", "white");


  //Deal my second card

  myCard2 = getCard(myDeck);
  fileName2 = "/images/" + myCard2.file;
  myTotal += myCard2.value;
  if(myTotal <= 11 && myCard2.name == "ace" || myCard1.name == "ace" ) {
  myTotal += 10;
  };
  var $img = $("<img>")
  .attr("src",  fileName2)
  .width(50)
  .appendTo("#m2");
   $("#m2").css("background-color", "white");

  //Set my total after deal

  $("#yourScore").text("Your score: " + myTotal)


  //Dealer card 1

    dCard1 = getCard(myDeck);
    dFileName1 = "/images/" + dCard1.file;
  dTotal = dCard1.value;

    var $img = $("<img>")
        .attr("src",  "images/back.png")
        .width(50)
        .appendTo("#d1")
        .attr("id", "back");
  $("#d1").css("background-color", "white");
   $("#dealerScore").text("Dealer score: " + dTotal)

  //Dealer card 2

  dCard2 = getCard(myDeck);
  dFileName2 = "/images/" + dCard2.file;
  dTotal += dCard2.value;
  if(dTotal <= 11 && dCard2.name == "ace" || dCard1.name == "ace") {
  dTotal += 10;
  };
  $("#back").attr("src",  dFileName1)
  .width(50)
  .appendTo("#d1");
    var $img = $("<img>")
        .attr("src",  dFileName2)
        .width(50)
        .appendTo("#d2");

  $("#d2").css("background-color", "white");

  //Update dealer score
   $("#dealerScore").text("Dealer score: " + dTotal);

//using evaluate function//

  evaluate(myTotal, dTotal);


  
  });


//HIT button//

$("#hit").on("click", function() {
 

  if (Object.keys(myCard3).length === 0){
    function getCard (myDeck) {
      return myDeck[Math.floor(Math.random() * 52)];};

    myCard3 = getCard(myDeck);
    fileName3 = "/images/" + myCard3.file;
    myTotal += myCard3.value;
    if(myCard3.name == "ace" && myTotal <= 11) {
    myTotal += 10;
    };
    var $img = $("<img>")
    .attr("src",  fileName3)
    .width(50)
    .appendTo("#m3");
     $("#m3").css("background-color", "white");
    $("#yourScore").text("Your score: " + myTotal);

    //evaluating score
    evaluate(myTotal, dTotal);


  } else if (Object.keys(myCard4).length === 0)
  {   function getCard (myDeck) {
      return myDeck[Math.floor(Math.random() * 52)];};
    myCard4 = getCard(myDeck);
         fileName4 = "/images/" + myCard4.file;
         myTotal += myCard4.value;
         if(myCard4.name == "ace" && myTotal <= 11) {
         myTotal += 10;
         };
         var $img = $("<img>")
         .attr("src",  fileName4)
         .width(50)
         .appendTo("#m4");
          $("#m4").css("background-color", "white");
   $("#yourScore").text("Your score: " + myTotal);
   evaluate(myTotal, dTotal);
}
  else if (Object.keys(myCard5).length === 0)
    {   function getCard (myDeck) {
        return myDeck[Math.floor(Math.random() * 52)];};
      myCard5 = getCard(myDeck);
           fileName5 = "/images/" + myCard5.file;
           myTotal += myCard5.value;
           if(myCard5.name == "ace" && myTotal <= 11) {
           myTotal += 10;
           };
           var $img = $("<img>")
           .attr("src",  fileName5)
           .width(50)
           .appendTo("#m5");
            $("#m5").css("background-color", "white");
     $("#yourScore").text("Your score: " + myTotal);
     evaluate(myTotal, dTotal);
     };
     
 
  // setting up dealer deal on hit //
  if (Object.keys(dCard3).length === 0){
      function getCard (myDeck) {
        return myDeck[Math.floor(Math.random() * 52)];};

      dCard3 = getCard(myDeck);
      dFileName3 = "/images/" + dCard3.file;
      dTotal += dCard3.value;
      if(dCard3.name == "ace" && dTotal <= 11) {
      dTotal += 10;
      };
      var $img = $("<img>")
      .attr("src",  dFileName3)
      .width(50)
      .appendTo("#d3");
       $("#d3").css("background-color", "white");
      $("#dealerScore").text("Dealer score: " + dTotal)

      //evaluating score
    evaluate(myTotal, dTotal);

    } else if (Object.keys(dCard4).length === 0)
    {   function getCard (myDeck) {
        return myDeck[Math.floor(Math.random() * 52)];};
      dCard4 = getCard(myDeck);
           dFileName4 = "/images/" + dCard4.file;
           dTotal += dCard4.value;
           if(dCard4.name == "ace" && dTotal <= 11) {
           dTotal += 10;
           };
           var $img = $("<img>")
           .attr("src",  dFileName4)
           .width(50)
           .appendTo("#d4");
            $("#d4").css("background-color", "white");
     $("#dealerScore").text("Dealer score: " + dTotal);
     if(dTotal == 21) {
      $("#lose").css("visibility", "visible");
      gameInPlay = false;

    } 
  else if (dTotal => 21) {
    $("#win").css("visibility", "visible");
    gameInPlay = false;

  } 
  }
    else if (Object.keys(dCard5).length === 0)
      {   function getCard (myDeck) {
          return myDeck[Math.floor(Math.random() * 52)];};
        dCard5 = getCard(myDeck);
             dFileName5 = "/images/" + dCard5.file;
             dTotal += dCard5.value;
             if(dCard5.name == "ace" && dTotal <= 11) {
             dTotal += 10;
             };
             var $img = $("<img>")
             .attr("src",  dFileName5)
             .width(50)
             .appendTo("#d5");
              $("#d5").css("background-color", "white");
       $("#dealerScore").text("Dealer score: " + dTotal);
       evalaute(myTotal, dTotal);

    }

});


  //STAY //

  $("#stay").on("click", function() {



      // setting up dealer deal on stay //
      if (Object.keys(dCard3).length === 0){
          function getCard (myDeck) {
            return myDeck[Math.floor(Math.random() * 52)];};

          dCard3 = getCard(myDeck);
          dFileName3 = "/images/" + dCard3.file;
          dTotal += dCard3.value;
          if(dCard3.name == "ace" && dTotal <= 11) {
          dTotal += 10;
          };
          var $img = $("<img>")
          .attr("src",  dFileName3)
          .width(50)
          .appendTo("#d3");
           $("#d3").css("background-color", "white");
          $("#dealerScore").text("Dealer score: " + dTotal)

          //evaluating score
          if(dTotal == 21) {
              $("#lose").css("visibility", "visible");
              gameInPlay = false;

            } 
          else if (dTotal => 21) {
            $("#win").css("visibility", "visible");
            gameInPlay = false;

          } 

        } else if (Object.keys(dCard4).length === 0)
        {   function getCard (myDeck) {
            return myDeck[Math.floor(Math.random() * 52)];};
          dCard4 = getCard(myDeck);
               dFileName4 = "/images/" + dCard4.file;
               dTotal += dCard4.value;
               if(dCard4.name == "ace" && dTotal <= 11) {
               dTotal += 10;
               };
               var $img = $("<img>")
               .attr("src",  dFileName4)
               .width(50)
               .appendTo("#d4");
                $("#d4").css("background-color", "white");
         $("#dealerScore").text("Dealer score: " + dTotal);
         evaluate(myTotal, dTotal);
      }
        else if (Object.keys(dCard5).length === 0)
          {   function getCard (myDeck) {
              return myDeck[Math.floor(Math.random() * 52)];};
            dCard5 = getCard(myDeck);
                 dFileName5 = "/images/" + dCard5.file;
                 dTotal += dCard5.value;
                 if(dCard5.name == "ace" && dTotal <= 11) {
                 dTotal += 10;
                 };
                 var $img = $("<img>")
                 .attr("src",  dFileName5)
                 .width(50)
                 .appendTo("#d5");
                  $("#d5").css("background-color", "white");
           $("#dealerScore").text("Dealer score: " + dTotal);
           evaluate(myTotal, dTotal);
          }
    });   
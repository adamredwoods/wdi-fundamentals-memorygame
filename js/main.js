//


var cards = [
   {
      rank: "queen",
      suit: "hearts",
      cardImage: "images/queen-of-hearts.png"
   },
   {
      rank: "queen",
      suit: "diamonds",
      cardImage: "images/queen-of-diamonds.png"
   },
   {
      rank: "king",
      suit: "hearts",
      cardImage: "images/king-of-hearts.png"
   },
   {
      rank: "king",
      suit: "diamonds",
      cardImage: "images/king-of-diamonds.png"
   }
];

var cardsInPlay = [];

var createBoard = function() {

   var board = document.getElementById("game-board");

   for (var i=0; i<cards.length; i++) {
      var newCardImg = document.createElement("img");
      newCardImg.setAttribute("src","images/back.png");
      newCardImg.setAttribute("data-id",i);

      newCardImg.addEventListener("click",flipCard);

      board.appendChild(newCardImg);
   }

}

var flipCard = function() {

   var cardId = this.getAttribute("data-id");

   cardsInPlay.push(cards[cardId].rank);
   this.setAttribute("src",cards[cardId].cardImage);

   console.log("User flipped "+cards[cardId].rank);

   checkForMatch();
   
};

var checkForMatch = function() {
   if (cardsInPlay.length === 2) {

      if (cardsInPlay[0] === cardsInPlay[1]) {
         alert("Match!");
      } else {
         alert("Sorry, try again.");
      }

   }
};

createBoard();

"use strict";
  
var CarLot = (function(oldCarLot) {
	

	oldCarLot.activateEvents = function() {
	
	var allCards = document.querySelectorAll(".carCard");
  	var inputText = document.getElementById("inputText");
	var selectedCard;

	function selectACard (event) {

	inputText.value = " ";
	inputText.focus();
	selectedCard = event.currentTarget;
	CarLot.removeCard();
	CarLot.addSelectedCard("selectedCard");


  }
	for (var i = 0; i < allCards.length; i++) { 
		var currentCard = allCards[i];
		console.log("allCards[i]", allCards[i]);
	currentCard.addEventListener("click", selectACard);

}
	console.log(allCards );


  	inputText.addEventListener("keypress", function editCard(event) {

  	var edition = selectedCard.querySelector(".description");
 	 edition.innerHTML = inputText.value;

});

	var selectedCard = event.currentTarget;

	oldCarLot.removeCard = function() {
	var allCards = document.querySelectorAll(".carCard");
	for (var i = 0; i < allCards.length; i++) { 
		var currentCard = allCards[i];
		
	currentCard.classList.remove("selectedCard");

}
};

	oldCarLot.addSelectedCard = function() {
		selectedCard.classList.add("selectedCard");
	};

  //var submit = document.querySelector(".submitBtn");	



}
	

 return CarLot;


	
})(CarLot|| {});

CarLot.loadInventory(CarLot.activateEvents);
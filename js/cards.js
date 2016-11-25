"use strict";
let cardActions = {};

cardActions.selectACard = function(event){
let currentCard = event.currentTarget;
let allCards = document.querySelectorAll(".col-xs-4");
	for (let i = 0; i < allCards.length; i++){
		allCards[i].classList.remove("selectedCard");
	}
		currentCard.classList.add("selectedCard");
};
cardActions.editCards =function() {
	$(".selectedCard").find(".description").text($("#inputText").val());
};

module.exports = cardActions; 
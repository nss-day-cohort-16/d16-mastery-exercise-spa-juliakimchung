"use strict";

let cardActions = require('./cards');
let jquery = require('jquery');

var activateEvents = function() {
var allCards = document.getElementsByClassName("col-xs-4");
var inputText = document.getElementById("inputText");
	for (var i = 0; i < allCards.length; i++) {
		let currentCard = allCards[i];
	//console.log("currentCard", currentCard);
		currentCard.addEventListener("click", cardActions.selectACard);
	}
	inputText = document.getElementById("inputText");
		$("#inputText").keyup (function(event){
		cardActions.editCards();
		});
		
	inputText.addEventListener("keypress", function(event){
		if(event.keyCode ===13) {
		inputText.value = " ";
		}
	});
};

module.exports = activateEvents;
	


	


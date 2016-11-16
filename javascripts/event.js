
"use strict";

 var CarLot = (function(oldCarLot) {
	

	oldCarLot.activateEvents = function() {

	var allCards = document.querySelectorAll(".carCard");
	var inputText = document.getElementById("inputText");
	var submit = document.getElementById("submitBtn");
    var selectedCard = event.currentTarget;

		$("#inputText").keyup (function editCard(event){
		   
			var edition = selectedCard.querySelector(".description");
			
		    edition.innerHTML = inputText.value;
			
			}
		);

		inputText.addEventListener("keypress",function deleteInputText(event){
			if(event.keyCode ===13) {
				 inputText.value = " ";
			}
		});
			for (var i = 0; i < allCards.length; i++) {
				selectedCard = allCards[i];
			}
		function selectACard (){

		inputText.value = " ";
		inputText.focus();
		selectedCard = event.currentTarget;
		CarLot.removeCard();
		CarLot.addSelectedCard("selectedCard");
		}
			for (var i = 0; i < allCards.length; i++) { 
			var currentCard = allCards[i];
			currentCard.addEventListener("click", selectACard);
			}


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
	};
	

 	return CarLot;


	
})(CarLot|| {});

CarLot.loadInventory(CarLot.activateEvents);
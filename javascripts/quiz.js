"use strict";

var CarLot = (function(oldCarLot) {
  // Loop over the inventory and populate the page
    var list = document.getElementById("cars-grid");
      
    oldCarLot.populatePage = function(inventory) {
      var outputDom = " ";

      inventory.forEach(function(currentInventory, index){

        if(index % 3 === 0) {
        
        outputDom += `<div class="row spacer" >`;
       }
        outputDom += 
       `<div class="col-xs-4 carCard ${index}">
        <p>${currentInventory.make}</p>
        <p>${currentInventory.model}</p>
        <p>${currentInventory.year}</p>
        <p>${currentInventory.price}</p>
        <p class = "description">${currentInventory.description}</p></div>`;

        if((index+1)%3 === 0) {
        outputDom += `</div>`;
       }

       });

    list.innerHTML = outputDom;
    
    oldCarLot.activateEvents();
    
    };

  return CarLot; 

})(CarLot|| {});


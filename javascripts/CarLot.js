"use strict";

var CarLot = (function (oldCarLot) {

  var privateInventory = {};

  oldCarLot.loadInventory = function () { 

    var inventoryLoader = new XMLHttpRequest();

    inventoryLoader.open("GET", "javascripts/inventory.json");
    inventoryLoader.send();

    inventoryLoader.addEventListener("load", function () {
      privateInventory = JSON.parse(this.responseText).cars;
      
      
      CarLot.populatePage(privateInventory);
    });

  };

  return oldCarLot;
    
    
})(CarLot|| {});

  

"use strict";

var CarLot = (function (oldCarLot) {

    var privateInventory = {};

   
    // oldCarLot.getInventory = function () { 
    //   //console.log("loadInventory function loads" );
    //   return privateInventory;

    // };

    oldCarLot.loadInventory = function () { 
  
    var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.open("GET", "javascripts/inventory.json");
      inventoryLoader.send();

      inventoryLoader.addEventListener("load", function () {
      privateInventory = JSON.parse(this.responseText).cars;
        
        //console.log("privateInventory", privateInventory );
        //pass data to quiz.js
        CarLot.populatePage(privateInventory);
       });

      };

      return oldCarLot;
    
    
})(CarLot|| {});

  

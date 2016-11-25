"use strict";

let carInventory = require('./carLot'),
    eventStuff = require('./event'),
    Handlebars = require('hbsfy/runtime'),
    carTemplate = require('../template/car-grid.hbs');
    Handlebars.registerPartial('navbar', require('../template/partials/nav-bar.hbs'));

function populatePage(inventory) {
  let list = document.getElementById("cars-grid");
  let listDiv = document.createElement("div");
  list.innerHTML = (carTemplate(inventory));
  list.appendChild(listDiv);
  eventStuff();
}

carInventory.loadInventory()
.then(
  function(inventoryFromLoadInventoryResolve) {
  populatePage(inventoryFromLoadInventoryResolve);
  //console.log("carPromise", inventoryFromLoadInventoryResolve);
  },
  function(reason){
 //console.error('Something went wrong', reason);
  }
);














//   )
//       inventory.forEach(function(currentInventory, index){

//         if(index % 3 === 0) {
        
//         outputDom += `<div class="row spacer" >`;
//        }
//         outputDom += 
//        `<div class="col-xs-4 carCard ${index}">
//         <p>${currentInventory.make}</p>
//         <p>${currentInventory.model}</p>
//         <p>${currentInventory.year}</p>
//         <p>${currentInventory.price}</p>
//         <p class = "description">${currentInventory.description}</p></div>`;

//         if((index+1)%3 === 0) {
//         outputDom += `</div>`;
//        }

//        });

   
    
    
// };

  
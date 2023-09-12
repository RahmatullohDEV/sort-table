
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
    const accordionButton = document.querySelector(".accordion");
    const panelDiv = document.querySelector(".panel#salom");
  
    accordionButton.addEventListener("click", function () {
      // "towns" massividan ma'lumotlarni olish
      const townsData = towns.flat();
  
      // "salom" divini tozalash
      panelDiv.innerHTML = "";
  
      // "townsData" massividagi ma'lumotlarni "salom" diviga qo'shish
      townsData.forEach((room) => {
        const p = document.createElement("p");
        p.textContent = `Room ID: ${room.id}, Entrance: ${room.entrance}, Floor: ${room.floor}, Room Number: ${room.room_number}, Room Space: ${room.room_space}`;
        panelDiv.appendChild(p);
      });
    });
  });
  
  
  
  const databases = [
                { 
                    "id": 1, 
                    "created_at": "2023-09-03T04:15:42.023Z", 
                    "updated_at": "2023-09-03T04:17:03.904Z", 
                    "entrance": 2, 
                    "floor": 1, 
                    "room_number": 21, 
                    "cells": null, 
                    "room_space": 58, 
                    "status": null 
                }, 
                { 
                    "id": 2, 
                    "created_at": "2023-09-03T04:15:42.023Z", 
                    "updated_at": "2023-09-03T04:17:03.904Z", 
                    "entrance": 2, 
                    "floor": 1, 
                    "room_number": 22, 
                    "cells": null, 
                    "room_space": 58, 
                    "status": null 
                }, 
                { 
                    "id": 3, 
                    "created_at": "2023-09-03T04:15:42.023Z", 
                    "updated_at": "2023-09-03T04:17:03.904Z", 
                    "entrance": 2, 
                    "floor": 1, 
                    "room_number": 23, 
                    "cells": null, 
                    "room_space": 58, 
                    "status": null 
                }, 
                { 
                    "id": 4, 
                    "created_at": "2023-09-03T04:15:42.023Z", 
                    "updated_at": "2023-09-03T04:17:03.904Z", 
                    "entrance": 2, 
                    "floor": 1, 
                    "room_number": 24, 
                    "cells": null, 
                    "room_space": 58, 
                    "status": null 
                }, 
           
                { 
                    "id": 5, 
                    "created_at": "2023-09-03T04:15:42.023Z", 
                    "updated_at": "2023-09-03T04:17:03.904Z", 
                    "entrance": 2, 
                    "floor": 2, 
                    "room_number": 25, 
                    "cells": null, 
                    "room_space": 58, 
                    "status": null 
                }, 
                { 
                    "id": 6, 
                    "created_at": "2023-09-03T04:15:42.023Z", 
                    "updated_at": "2023-09-03T04:17:03.904Z", 
                    "entrance": 2, 
                    "floor": 2, 
                    "room_number": 26, 
                    "cells": null, 
                    "room_space": 58, 
                    "status": null 
                }, 
                { 
                    "id": 7, 
                    "created_at": "2023-09-03T04:15:42.023Z", 
                    "updated_at": "2023-09-03T04:17:03.904Z", 
                    "entrance": 2, 
                    "floor": 2, 
                    "room_number": 27, 
                    "cells": null, 
                    "room_space": 58, 
                    "status": null 
                }, 
                { 
                    "id": 8, 
                    "created_at": "2023-09-03T04:15:42.023Z", 
                    "updated_at": "2023-09-03T04:17:03.904Z", 
                    "entrance": 2, 
                    "floor": 2, 
                    "room_number": 28, 
                    "cells": null, 
                    "room_space": 58, 
                    "status": null 
                } ,
          
                { 
                    "id": 9, 
                    "created_at": "2023-09-03T04:15:42.023Z", 
                    "updated_at": "2023-09-03T04:17:03.904Z", 
                    "entrance": 2, 
                    "floor": 3, 
                    "room_number": 29, 
                    "cells": null,
                }, 
                { 
                    "id": 10, 
                    "created_at": "2023-09-03T04:15:42.023Z", 
                    "updated_at": "2023-09-03T04:17:03.904Z", 
                    "entrance": 2, 
                    "floor": 3, 
                    "room_number": 30, 
                    "cells": null, 
                    "room_space": 58, 
                    "status": null 
                }, 
                { 
                    "id": 11, 
                    "created_at": "2023-09-03T04:15:42.023Z", 
                    "updated_at": "2023-09-03T04:17:03.904Z", 
                    "entrance": 2, 
                    "floor": 3, 
                    "room_number": 31, 
                    "cells": null, 
                    "room_space": 58, 
                    "status": null 
                }, 
                { 
                    "id": 12, 
                    "created_at": "2023-09-03T04:15:42.023Z", 
                    "updated_at": "2023-09-03T04:17:03.904Z", 
                    "entrance": 2, 
                    "floor": 3, 
                    "room_number": 32, 
                    "cells": null, 
                    "room_space": 58, 
                    "status": null 
                } ,
           
                { 
                    "id": 13, 
                    "created_at": "2023-09-03T04:15:42.023Z", 
                    "updated_at": "2023-09-03T04:17:03.904Z", 
                    "entrance": 2, 
                    "floor": 4, 
                    "room_number": 33, 
                    "cells": null, 
                    "room_space": 58, 
                    "status": null 
                }, 
                { 
                    "id": 14, 
                    "created_at": "2023-09-03T04:15:42.023Z", 
                    "updated_at": "2023-09-03T04:17:03.904Z", 
                    "entrance": 2, 
                    "floor": 4, 
                    "room_number": 34, 
                    "cells": null, 
                    "room_space": 58, 
                    "status": null 
                }, 
                { 
                    "id": 15, 
                    "created_at": "2023-09-03T04:15:42.023Z", 
                    "updated_at": "2023-09-03T04:17:03.904Z", 
                    "entrance": 2, 
                    "floor": 4, 
                    "room_number": 35, 
                    "cells": null, 
                    "room_space": 58, 
                    "status": null 
                }, 
                { 
                    "id": 16, 
                    "created_at": "2023-09-03T04:15:42.023Z", 
                    "updated_at": "2023-09-03T04:17:03.904Z", 
                    "entrance": 2, 
                    "floor": 4, 
                    "room_number": 36, 
                    "cells": null, 
                    "room_space": 58, 
                    "status": null 
                } ,
           
                { 
                    "id": 17, 
                    "created_at": "2023-09-03T04:15:42.023Z", 
                    "updated_at": "2023-09-03T04:17:03.904Z", 
                    "entrance": 2, 
                    "floor": 5, 
                    "room_number": 37, 
                    "cells": null, 
                    "room_space": 58, 
                    "status": null 
                }, 
                { 
                    "id": 18, 
                    "created_at": "2023-09-03T04:15:42.023Z", 
                    "updated_at": "2023-09-03T04:17:03.904Z", 
                    "entrance": 2, 
                    "floor": 5, 
                    "room_number": 38, 
                    "cells": null, 
                    "room_space": 58, 
                    "status": null 
                }, 
                { 
                    "id": 19, 
                    "created_at": "2023-09-03T04:15:42.023Z", 
                    "updated_at": "2023-09-03T04:17:03.904Z",  
                    "floor": 5, 
                    "room_number": 39, 
                    "cells": null, 
                    "room_space": 58, 
                    "status": null 
                }, 
                { 
                    "id": 20, 
                    "created_at": "2023-09-03T04:15:42.023Z", 
                    "updated_at": "2023-09-03T04:17:03.904Z", 
                    "entrance": 2, 
                    "floor": 5, 
                    "room_number": 40, 
                    "cells": null, 
                    "room_space": 58, 
                    "status": null 
                } 
            ] 
    
const tableBody = document.querySelector(".xonadon");

databases.map((user) => {

  tableBody.innerHTML += `<tr>
    <td>${user.id}</td>
    <td>${user.created_at}</td>
    <td>${user.updated_at}</td>
    <td>${user.entrance}</td>
    <td>${user.floor}</td>
    <td>${user.room_number}</td>
    <td>${user.cells}</td>
    <td>${user.room_space}</td>
    <td>${user.status}</td>
  </tr>`;
});




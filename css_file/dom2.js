
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
  
  
  
//   const data = {"towns":[ 
//         [ 
//             [ 
//                 { 
//                     "id": 41, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 1, 
//                     "floor": 1, 
//                     "room_number": 1, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 42, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 1, 
//                     "floor": 1, 
//                     "room_number": 2, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 43, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 1, 
//                     "floor": 1, 
//                     "room_number": 3, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 44, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 1, 
//                     "floor": 1, 
//                     "room_number": 4, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 } 
//             ], 
//             [ 
//                 { 
//                     "id": 45, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 1, 
//                     "floor": 2, 
//                     "room_number": 5, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 46, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 1, 
//                     "floor": 2, 
//                     "room_number": 6, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 47, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 1, 
//                     "floor": 2, 
//                     "room_number": 7, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 48, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 1, 
//                     "floor": 2, 
//                     "room_number": 8, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 } 
//             ], 
//             [ 
//                 { 
//                     "id": 49, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 1, 
//                     "floor": 3, 
//                     "room_number": 9, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 50, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 1, 
//                     "floor": 3,

// "room_number": 10, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 51, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 1, 
//                     "floor": 3, 
//                     "room_number": 11, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 52, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 1, 
//                     "floor": 3, 
//                     "room_number": 12, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 } 
//             ], 
//             [ 
//                 { 
//                     "id": 53, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 1, 
//                     "floor": 4, 
//                     "room_number": 13, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 54, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 1, 
//                     "floor": 4, 
//                     "room_number": 14, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 55, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 1, 
//                     "floor": 4, 
//                     "room_number": 15, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 56, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 1, 
//                     "floor": 4, 
//                     "room_number": 16, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 } 
//             ], 
//             [ 
//                 { 
//                     "id": 57, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 1, 
//                     "floor": 5, 
//                     "room_number": 17, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 58, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 1, 
//                     "floor": 5, 
//                     "room_number": 18, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 59, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 1, 
//                     "floor": 5, 
//                     "room_number": 19, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 60, 
//                     "created_at": "2023-09-03T04:15:42.023Z",

// "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 1, 
//                     "floor": 5, 
//                     "room_number": 20, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 } 
//             ] 
//         ], 
//         [ 
//             null, 
//             [ 
//                 { 
//                     "id": 61, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 2, 
//                     "floor": 1, 
//                     "room_number": 21, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 62, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 2, 
//                     "floor": 1, 
//                     "room_number": 22, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 63, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 2, 
//                     "floor": 1, 
//                     "room_number": 23, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 64, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 2, 
//                     "floor": 1, 
//                     "room_number": 24, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 } 
//             ], 
//             [ 
//                 { 
//                     "id": 65, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 2, 
//                     "floor": 2, 
//                     "room_number": 25, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 66, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 2, 
//                     "floor": 2, 
//                     "room_number": 26, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 67, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 2, 
//                     "floor": 2, 
//                     "room_number": 27, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 68, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 2, 
//                     "floor": 2, 
//                     "room_number": 28, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 } 
//             ], 
//             [ 
//                 { 
//                     "id": 69, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 2, 
//                     "floor": 3, 
//                     "room_number": 29, 
//                     "cells": null,

// "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 70, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 2, 
//                     "floor": 3, 
//                     "room_number": 30, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 71, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 2, 
//                     "floor": 3, 
//                     "room_number": 31, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 72, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 2, 
//                     "floor": 3, 
//                     "room_number": 32, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 } 
//             ], 
//             [ 
//                 { 
//                     "id": 73, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 2, 
//                     "floor": 4, 
//                     "room_number": 33, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 74, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 2, 
//                     "floor": 4, 
//                     "room_number": 34, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 75, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 2, 
//                     "floor": 4, 
//                     "room_number": 35, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 76, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 2, 
//                     "floor": 4, 
//                     "room_number": 36, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 } 
//             ], 
//             [ 
//                 { 
//                     "id": 77, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 2, 
//                     "floor": 5, 
//                     "room_number": 37, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 78, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 2, 
//                     "floor": 5, 
//                     "room_number": 38, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 79, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z",

// "entrance": 2,  
//                     "floor": 5, 
//                     "room_number": 39, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 }, 
//                 { 
//                     "id": 80, 
//                     "created_at": "2023-09-03T04:15:42.023Z", 
//                     "updated_at": "2023-09-03T04:17:03.904Z", 
//                     "entrance": 2, 
//                     "floor": 5, 
//                     "room_number": 40, 
//                     "cells": null, 
//                     "room_space": 58, 
//                     "status": null 
//                 } 
//             ] 
//         ] 
//     ] 
//   }


  const box = [
    {name:"muhammad" , age:24},
    {name:"rahmatulloh" , age:21},
    {name:"sodiqjon" , age:14},
    {name:"otabek" , age:18},
  ];
  console.log(box.map((e)=>` ${e.name}:${data.map((e) => e.name)}`));
// let btn = document.getElementById("submit");

// btn.addEventListener("click",function(){          <---birinchi usul
//     alert("hello");
// });

// btn.onclick = function(){                         <----ikkinchi usul
//     alert("hello");
// };



// let box = document.getElementById("box");

// box.addEventListener("mouseover",function(){
//     box.style.width = "400px";
// });




// box.addEventListener("mouseout",function(){
//     box.style.width = "200px";

// });




// let nav = document.getElementById("box1");

// nav.addEventListener("mouseover",function(){
//     nav.style.color = "red"
// });

// nav.addEventListener("mouseout",function(){
//     nav.style.color = "black"
// });

document.addEventListener('DOMContentLoaded', function() {
    let dropdown = document.querySelector('.dropdown');
    let dropdownIcon = dropdown.querySelector('.dropdown-icon');
    let isOpen = false;
  
    dropdownIcon.addEventListener('click' , function() {
      isOpen = !isOpen;
      if (isOpen) {
        dropdownIcon.textContent = 'X';
        dropdown.classList.add('open');
      } else {
        dropdownIcon.textContent = '☰';
        dropdown.classList.remove('open');
      }
    });
  });

     console.log((5 >= 3 && "5"));
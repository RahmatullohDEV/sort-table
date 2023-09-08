// let p = document.getElementById("result");
// p.innerHTML = "salom dunyo";

// let btn = document.getElementById("btn");
// btn.setAttribute("disabled","disabled");      //  <--ishlamaydigan qilish

// let link = document.getElementById("link");
// let url = "https://youtube.com/";               
// link.setAttribute("href" , url);

// let newElement = document.createElement("h1");
// newElement.innerHTML = "hello world";
// document.body.appendChild(newElement);               //  <--yangi element qoshish bodyga
// document.body.insertBefore(newElement,btn);
// document.body.removeChild(newElement);
// newElement.remove();                             //  <--remove qilish yani olib tashlash





let counter = 0;
    
        function kopaytir() {
          let element = document.querySelector('.element');
          let container = document.getElementById('container');
          let limit = 3;
    
          if (counter >= limit) {
            console.log("Kopaytirish limitiga yetdingiz!");
            return;
          }
    
          let clonedElement = element.cloneNode(true);
          container.appendChild(clonedElement);
          counter++;
        }
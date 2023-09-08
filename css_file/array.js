// // let fruits = ["olma" , "anor" , "shaftoli" , "nok"];

// // document.getElementById("result").innerHTML = `${fruits.map((a) => `<h2>${a}</h2>`).join("")}`;




// // let numbers = [1, 2, 3 ,4 ,5];

// // let natija = numbers.map((number) => number * 2);              //<----MAP
// // console.log(natija);




// // const movies = [     
// //     {name:'openhaimer',year:'2023', rating:'1'},
// //     {name:'avatar',year:'2008', rating:'5'},
// //     {name:'titanik',year:'1997', rating:'3'},
// //     {name:'forsaj 9',year:'2020', rating:'2'},
// //     {name:'avangers',year:'2012', rating:'4'},                  //  <---filter
// // ]

// // const filterMovies = movies.filter(movie => movie.year > 2010);


// // const filterMovies = movies.filter((movie) => {
// //     return movie.rating > 3
// // });

// // console.log(filterMovies);



// // const numbers = [1, 2, 3, 4, 5];

// // const sum = numbers.reduce((accumulator, currentNumber) => {           // <-----REDUCE massiv elementlarini birlashtirib qiymat olish uchun!
// //   return accumulator + currentNumber;
// // }, 0);

// // console.log(sum); 



// // const sentence = "Bu matn bir misoldir";

// // const words = sentence.split(" ");                   // <----SPLIT metodi string obyektining bir metodidir
// //                                                        //       Bu metod matnni belgilarga (delimiter) qirqib bolib matnni bir massivga ayrib beradi!
// // console.log(words);



// // const person = {
// //     name: "John",
// //     age: 30,
// //     city: "New York"                                  //<----- KEYS (property keys) obyektning kalitlari.BU MASSIV OBYEKTNING KORSATILGAN KALITLARINI TARTIBLANGAN HOLDA OZ ICHIGA OLADI
// //   };
  
// //   const keys = Object.keys(person);
  
// //   console.log(keys);








// //push,pop,shift,splice,slice

// // let fruits = ["olma","banan","nok","shaftoli","gilos"];
// // fruits.push("olcha");
// // fruits.pop();
// // fruits.shift();
// // fruits.splice(1,2,"uzum","anor");



// const searchButton = document.getElementById("button");
// const searchInput = document.getElementById("input");
// const resultDiv = document.getElementById("result");
// let fruits = ["nok", "olma", "shaftoli", "uzum", "nok"];
// const newFruit = "yangimeva";

// searchButton.addEventListener("click", () => {
//     const searchQuery = searchInput.value.toLowerCase();
//     const foundFruits = fruits.filter(fruit => fruit.includes(searchQuery));

//     if (foundFruits.length > 0) {
//         resultDiv.innerHTML = `"${searchQuery}":topildi.`;
//     } else {
//         fruits.push(searchQuery);
//         resultDiv.innerHTML = `" ${searchQuery} " Bu so'z topilmadi: malumot qo'shildi!`;
//     }
// });




// //1. find(): Royxatdagi elementlarni tekshirib, berilgan shartga mos keluvchi birinchi elementni qaytaradi.
//    Misol:
//    var mevalar = ["olma", "banan", "anjir", "shaftoli", "qulupnay"];
   
//    var natija = mevalar.find(function(meva) {
//      return meva.length < 5;
//    });
   
//    console.log(natija); // "anjir"




// //2. includes(): Berilgan elementni ro'yxatda qidiradi va u borligini yoki yo'qligini true yoki false qiymat bilan qaytaradi.
//    Misol:
//    var mevalar = ["olma", "banan", "anjir", "shaftoli", "qulupnay"];
   
//    var natija = mevalar.includes("banan");
   
//    console.log(natija); // true
   

// // //3. concat(): Bir nechta ro'yxatlarni birlashtirib yangi bir ro'yxat qaytaradi.
//    Misol:
//    var royxat1 = [1, 2, 3];
//    var royxat2 = [4, 5, 6];
   
//    var yangiRoyxat = royxat1.concat(royxat2);
   
//    console.log(yangiRoyxat); // [1, 2, 3, 4, 5, 6]
   


// // //4. unshift(): Ro'yxat boshiga yangi element(larni) qo'shadi va yangi ro'yxat uzunligini qaytaradi.
//    Misol:
  
//    var mevalar = ["olma", "banan", "anjir"];
   
//    var uzunlik = mevalar.unshift("shaftoli", "qulupnay");
   
//    console.log(mevalar); // ["shaftoli", "qulupnay", "olma", "banan", "anjir"]
//    console.log(uzunlik); // 5
   

// // //5. some(): Ro'yxatdagi elementlarni tekshirib, kamida bitta element berilgan shartga mos keladimi yoki kelmasligini true yoki false qiymat bilan qaytaradi.
//    Misol:
//    var sonlar = [2, 4, 6, 8, 10];
   
//    var natija = sonlar.some(function(son) {
//      return son * 2  ;
//    });
   
//    console.log(natija); // false
   
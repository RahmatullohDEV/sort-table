// let string = "Rahmatulloh"
// console.log(string)

// let number = 571;
// console.log(number)

// let boolean = true;
// console.log(boolean)

// let Undefined = undefined;
// console.log(Undefined)

// let Null = null;
// console.log(null)

// let id = symbol = ('id');
// console.log(id)

// let bigIntNum = BigInt(12345678900000000n);
// console.log(bigIntNum)

// let object = { name: "rahmatulloh 998943001215" };
// console.log(object)





// let bal = 77;

// if (bal <= 50) {
//     console.log("qayta topshirish");
// }

// else if (bal <= 60){
//     console.log("qoniqarli baho");
// }

// else if (bal <= 80){
//     console.log("yaxshi");
// }

// else if(bal <= 100){
//     console.log("alo")
// }

// else {
//     console.log("qayerdadir xato bor")
// }





// Control structure
// if else
// switch case
// loops for & while



// let age = 15;

// if (age >= 16 && age < 18) {
//   console.log("Siz shariyat tomonidan nikohdan o'tishingiz mumkin");
// } else if (age >= 18) {
//   console.log("Siz davlat qoidalari bo'yicha nikohdan o'tishingiz mumkin");
// } else {
//   console.log("Siz hali voyaga yetmagansiz");
// }




// let word = "apple";

// switch (word) {
//   case "apple":
//     console.log("olma");
//     break;
//   case "pear":
//     console.log("nok");
//     break;
//   default:
//     console.log("bunday so'z topilmadi");
// }




// for (let a = 0; a < 5; a++) {
//   console.log(a);
// }

// let count = 0;




// while (count <= 5) {
//   console.log(count);
//   count++;
// }




// named function (deklerativ)
// anonymous function(Expression)
// arrow function
// constructor function
// IIFE (Immediately Invoked Function Expressions)




// function hello(shart, birinchi_qiymat, ikkinchi_qiymat) {
//     if (shart === "+") {
//       console.log(birinchi_qiymat + ikkinchi_qiymat);
//     } else if (shart === "-") {
//       console.log(birinchi_qiymat - ikkinchi_qiymat);
//     } else if (shart === "*") {
//       console.log(birinchi_qiymat * ikkinchi_qiymat);
//     } else {
//       console.log(birinchi_qiymat / ikkinchi_qiymat);
//     }
//   switch (shart) {
//     case "+":
//       console.log(birinchi_qiymat + ikkinchi_qiymat);
//       break;
//     case "-":
//       console.log(birinchi_qiymat - ikkinchi_qiymat);
//       break;
//     case "*":
//       console.log(birinchi_qiymat * ikkinchi_qiymat);
//       break;
//     case "/":
//       console.log(birinchi_qiymat / ikkinchi_qiymat);
//       break;
//     default:
//       console.log("Ushbu shartni bajara olmayman");
//   }
// }
// hello("/", 5, 10);

//--------------------------------------------------

//EXPRESSION FUNKSION

// const hello = function (name) {
//   console.log("Hello " + name);
// };

// hello("Muhammad");

//------------------------------------------------------


// const hello = (name) => {
//   console.log("Hello " + name);
// };




// const hello = (name) => {
//   console.log("Hello " + name);
//   // document.write(name);
//   console.log(name);
// };

// hello("oka");

//---------------------------------------------------------------------------



// function Person(name, age) {
//   this.hello = function () {
//     console.log(Salom mening ismim ${name} va men ${age} yoshdaman);
//   };
// }


//------------------------------------------------------------


// let person1 = new Person("Abror", 14);

// person1.hello();

// (function () {
//   console.log("Bu funksiya yaratilishidan song darhol ishga tushadi");
// })();


//------------------------------------------------------------------------------


// console.log(oka(10))
// console.log(oka(2))

// function oka (men1) {
//   return men1 * men1
// }

//--------------------------------------------------------------


// function juftlikUchun(number){
//   if (number % 2 === 0){
//     console.log('number rostan juft');   //<---BU DEKLORATION  NAMED
//   } else {
//     console.log('number rostan toq');
//   }
// }

// juftlikUchun(113)

//---------------------------------------------------------------------------


// const juftlikUchun = function(number){
//     if (number % 2 === 0){
//       console.log('number rostan juft');   //<---BU EXPRESSION ANONIM
//     } else {
//       console.log('number rostan toq');
//     }
//   }
  
//   juftlikUchun(13)


//-------------------------------------------------------------------------


// const takrorla = number => {
//   if (number >= 50){
//     console.log("yaxshi!");
//   }                                 //<----- BU ARROW FUNKTION
//   else {
//     console.log("xato !!!")
//   }

// }

// takrorla(49)


//-------------------------------------------------------------------------------------------------------------------



// function Odamlar(isim, yosh) {
//   this.isim = isim;
//   this.yosh = yosh;
//   this.selamlash = function() {
//     console.log("Salom, mening ismim " + this.isim + " va men " + this.yosh + " yoshdaman.");    //CONSTRUCTION FUNCTION
//   };
// }

// var odam1 = new Odamlar("John", 25);
// var odam2 = new Odamlar("Alice", 30);



//-------------------------------------------------------------------------------------------------------------------
                                //OOP

// let car = {
//   model: "BMW",               //--BU OBJECT FUNKSIYA--
//   type: "F90",
//   year: 2018,
//   narx:450000, 
//   xususiyat: ["sportcar","beatiful","comfort", "beatiful"],
//   hammasi:function () {
//     console.log(`this ${this.model}: type ${this.type}, year ${this.year}, narx ${this.narx}, xususiyat: ${this.xususiyat}`);
//   }
// }

// car.hammasi();
// console.log(car.type)//bu yagona chaqirish


//--------------------------------------------------------------------------------------

// let person = function (name,age){
//   this.name = name;
//   this.age = age;                                          //--CONTRUKTOR FUNKSIYA--
                                                                          
//   this.hello = function (){
//     console.log(`Hello ${name} ${age}`);
//   }
// }

// let func = new person("abror", 14);
// func.hello();

//------------------------------------------------------------------------------------------------

// let okay = function(name,age,interesting){
//   this.name = name;
//   this.age = age;
//   this.interesting = interesting;                              //--CONSTRUKTOR FUNKSIYA--

//   this.okay = function (){
//     console.log(`U ${name} va u ${age} uning qiziqishlari ${interesting}`)
//   }
// }

// let bottle = new okay ("Rahmatulloh","21 yoshda", "dasturlash") 
// bottle.okay();


//----------------------------------------------------------------------------------------------



// let info = {
//   student:"Nasimjonov Rahmatulloh",
//   yosh:21,
//   manzil:"Namangan sh",
//   oqishJoyi:"IT school",
//   natija:function() {
//     console.log(`o'quvchi: ${this.student}, yoshi ${this.yosh}, yashash joyi: ${this.manzil}, o'qish joyi: ${this.oqishJoyi}`)
//   }
// }

// info.natija()



// class car {
//   constructor( rangi , yili , name) {
//     this.rangi = rangi,
//     this.yili = yili,
//     this.name = name;
//   }

//   getCar() {
//     if(this.yili >= 2010 && this.yili <= 2023){
//       console.log ("bizda ushbu avtomobil bor!")
//     } else{
//       console.log ("bizda bunday avtomobil yoq ! ! !")
//     }
//   }
// }

// let ThisCar = new car("black","2000","BMW") 
// ThisCar.getCar();





// class Avtomobil
// {
//   constructor ( tur, rang, yil, )
//   {
//     this.tur = tur;
//     this.rang = rang;
//     this.yil = yil;
//   }

//   mijozKeldi ()
//   {
//     if ( this.mijozlar >= 2 || this.rang === "red" && this.yil >= 2017 && this.yil <= 2023 )
//     {
//       console.log( "Sizga kerakli avtomobil bor!" );
//     } else
//     {
//       console.log( "unaqasi yoq!" );
//     }
//   }
// }

// const avto1 = new Avtomobil( "sedan", "red", 2020 );
// const avto2 = new Avtomobil( "mers", "blr", 2020 );

// avto1.mijozKeldi();
// avto2.mijozKeldi();







// class person{
//   constructor(name){
//     this.name = name;
//   }

//   hello () {
//     console.log(`salom mening ismim ${this.name}`);
       
//   }

// }
// class Student extends person {
//   constructor(name , grade){
//     super(name),
//     this.grade = grade;
//   }

//   getGrade() {
//     console.log(`mening sinfim ${this.grade}`);
//   }

// }

// let student = new Student("ali","10");
// student.hello();
// student.getGrade();




// class Kitob {
//   constructor(nomi, yili, muallifi) {
//     this.nomi = nomi;
//     this.yili = yili;
//     this.muallifi = muallifi;
//   }
// }

// class Kutubxona {
//   constructor() {
//     this.kitoblari = [];
//   }

//   kitobQoshish(kitob) {
//     this.kitoblari.push(kitob);
//   }

//   kitoblar() {
//     return this.kitoblari;
//   }
// }

// var kitob1 = new Kitob("JavaScript: The Good Parts", 2008, "Douglas Crockford");
// var kitob2 = new Kitob("Eloquent JavaScript", 2011, "Marijn Haverbeke");

// var kutubxona = new Kutubxona();

// kutubxona.kitobQoshish(kitob1);
// kutubxona.kitobQoshish(kitob2);


// var kitoblar = kutubxona.kitoblar();

// kitoblar.forEach(function(kitob) {
//   console.log("Kitob nomi: " + kitob.nomi);
//   console.log("Yili: " + kitob.yili);
//   console.log("Muallifi: " + kitob.muallifi);
//   console.log("--------------------");
// });

// function kitobQoshish() {
//   var nomi = prompt("Kitob nomi:");
//   var yili = prompt("Yili:");
//   var muallifi = prompt("Muallifi:");

//   var kitob = new Kitob(nomi, yili, muallifi);
//   kutubxona.kitobQoshish(kitob);
  
//   console.log("Kitob nomi:" + nomi + " yili:" + yili + " muallifi:" + muallifi);
// } 
 



// class Kitob {
//   constructor(nomi, yili, muallifi) {
//     this.nomi = nomi;
//     this.yili = yili;
//     this.muallifi = muallifi;
//   }

//   book() {
//     console.log(`Kitob nomi: ${this.nomi} yili: ${this.yili} muallif: ${this.muallifi}`);
//     console.log(`-----------------------------------------------------------`)
//   }
//   theBook() {
//     console.log(`Kitob nomi: ${this.nomi} yili: ${this.yili} muallif: ${this.muallifi}`);
//     console.log(`-----------------------------------------------------------`)
//   }

 
// }


// let books = new Kitob("O'tkan kunlar" , "1934" , "Abdulla Qodiriy");
// let bookk = new Kitob("JavaScript" , "1941" , "James Bond");
// books.book();
// bookk.theBook();

 // Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

 // 1. Definisco array vuoto
 var dispari = [];

var num;
 // 2. Riempio array con numeri dispari
 for (var i = 0; i < 6; i++) {
   num = parseInt(prompt("Inserisci un numero"));
   if ( !isNaN(num) ){
     if ( !((num % 2) == 0 )) {
       dispari.push(num);
     }
   }
 }
 console.log(dispari);

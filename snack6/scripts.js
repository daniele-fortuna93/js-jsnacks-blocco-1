 // Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

 // 1. Chiedo N all'utente
 var n = parseInt(prompt("Inserisci un numero"));
 if ( isNaN(n) ) {
   alert("Per favore inserisci un numero.");
   n = parseInt(prompt("Inserisci un numero"));
 }

var x;
 // 2. Stampo i quadrati fino a Number
 if ( !isNaN(n)) {
   for (var i = 0; i < n; i++) {
     x = 1;
     x = (x+i) * (x+i);
     console.log(x);
   }
 } else {
   alert("Ricarica la pagina!");
 }

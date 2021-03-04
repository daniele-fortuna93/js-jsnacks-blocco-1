// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

// // 1. Chideo il numero all'utente ed eseguo un controllo
 do {
   var numero = parseInt(prompt("inserisci un numero"));
 } while ( isNaN(numero) );

// // 2. Stampo il numero se è pari altrimenti stampo il numero+1
 if ( numero % 2 == 0 ) {
   console.log(numero);
 } else {
   console.log(numero + 1)
 }

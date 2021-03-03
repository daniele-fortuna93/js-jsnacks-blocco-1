 // Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

 // 1. Richiedi all'utente un numero di 4 cifre
 do {
  var numero = prompt("Inserisci un numero di 4 cifre");
} while ( numero.length != 4);


 // 2. Scomposizione numero e somma numeri
  var somma = 0;
  for (var i = 0; i < numero.length; i++) {
    somma += parseInt(numero[i]);
  }
 console.log(somma);

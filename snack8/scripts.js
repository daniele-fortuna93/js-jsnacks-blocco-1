 // Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

 // 1. Richiedi all'utente un numero di 4 cifre
 var numero = prompt("Inserisci un numero di 4 cifre");

 // 2. Creazione di un array per inserimento singole cifre
 var numeroScomposto = [];


 // 3. Scomposizione numero e somma numeri
  var x = 0;
  var somma = 0;
  for (var i = 0; i < numero.length; i++) {
    x = numero[i];
    numeroScomposto.push(x);
    somma += parseInt(numeroScomposto[i]);
  }
 console.log(somma);

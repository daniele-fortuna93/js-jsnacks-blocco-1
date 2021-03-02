// Il software deve chiedere per 10 volte all’utente di inserire
// un numero. Il programma stampa la somma di tutti i numeri
// inseriti.
var somma = 0;
// 1. Chiedo all'utente di inserire un numero 10 volte
for (var i = 0; i < 10; i++) {
  var input = parseInt(prompt("Inserisci un numero."));
  // 2. Controllo se il valore inserito è un numero
  if ( isNaN(input) ) {
    alert("Inserisci un valore.")
    input = parseInt(prompt("Inserisci un numero."));
    somma += input;
  } else {
  somma += input;
    }
}
console.log(somma);

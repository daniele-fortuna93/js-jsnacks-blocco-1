// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
// 1. Inserimento numeri dell'utente
var num1 = parseInt(prompt("Inserisci il primo numero"));
if ( isNaN(num1) ) {
  num1 = parseInt(prompt("Per favore inserisci il primo numero"));
}
var num2 = parseInt(prompt("Inserisci il secondo numero"));
if ( isNaN(num2) ) {
  num2 = parseInt(prompt("Per favore inserisci il secondo numero"));
}
// 2. Controllo dati inseriti
if ( isNaN(num1) || isNaN(num2) ) {
  document.getElementById('esito').innerHTML = "Hai sbagliato ad inserire i dati, ricarica la pagina.";
} else if ( num1 > num2 ) {
  document.getElementById('esito').innerHTML = num1;
} else if ( num1 < num2 ) {
  document.getElementById('esito').innerHTML = num2;
} else {
  document.getElementById('esito').innerHTML = "I numeri inseriti sono uguali.";
}

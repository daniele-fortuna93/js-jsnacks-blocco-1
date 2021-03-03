// Calcola la somma e la media del totale dei numeri inseriti dall'utente.

// 1. Richiesta quantità di numeri da inserire
var quantiNumeri = parseInt(prompt("Quanti numeri vuoi inserire?"));

// 2. Inserimento numeri nella lista
var listaNumeri = [];
var numero = 0;
var somma = 0;
for (var i = 0; i < quantiNumeri; i++) {
 numero = parseInt(prompt("Inserisci un numero."));
 listaNumeri.push(numero);
 somma += listaNumeri[i];
}
console.log(listaNumeri);

console.log("La somma è " + somma);

// 3. Media dei numeri della listaNumeri
var media = somma / listaNumeri.length;
console.log("La media è " + media);

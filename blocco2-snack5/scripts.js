// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.

// 1. Creazione array
var array1 = [1, "Pippo", "Mario", 8, "Ciao", 36];
var array2 = ["Rossi", "Giuseppe", 9];

// 2. Confronto array e aggiunta elementi all'array più corto
var elemento;
if ( array1.length > array2.length) {
  while ( array2.length < array1.length ){
    elemento = prompt("Inserisci un elemento nell'array.")
    array2.push(elemento);
  }
} else if ( array2.length > array1.length ) {
  while ( array1.length < array2.length ){
    elemento = prompt("Inserisci un elemento nell'array.")
    array1.push(elemento);
  }
}
console.log(array1);
console.log(array2);
console.log("Gli array hanno la stessa lunghezza.");

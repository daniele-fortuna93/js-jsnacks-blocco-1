 // Calcola la somma e la media dei primi 10 numeri.

 // 1. Richiesta quantità di numeri da inserire
 var quantiNumeri = parseInt(prompt("Quanti numeri vuoi inserire?"));

 // 2. Inserimento numeri nella lista
 var listaNumeri = [];
 var numero = 0;
 for (var i = 0; i < quantiNumeri; i++) {
   numero = parseInt(prompt("Inserisci un numero."));
   listaNumeri.push(numero);
 }
 console.log(listaNumeri);

 // 3. Somma dei numeri della listaNumeri
 var somma = 0;
 for (var i = 0; i < listaNumeri.length; i++) {
   somma += listaNumeri[i];
 }
console.log("La somma è " + somma);

// 4. Media dei numeri della listaNumeri
 var media = somma / listaNumeri.length;
 console.log("La media è " + media);

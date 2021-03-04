// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

// 1.(for) Chiedo i numeri all'utente e sommo i numeri
//  var numero = 0;
//  var somma = 0;
//
//  for (var i = 1; i <= 5; i++) {
//    numero = parseInt(prompt("Inserisci il " + i + "° numero"));
//    if ( !isNaN(numero) ){
//      somma += numero;
//    }
//  }
// console.log(somma);

// 1.(while) Chiedo i numeri all'utente e sommo i numeri
var somma = 0;
var numero;
var i = 1;
 while ( i <= 5 ) {
   numero = parseInt(prompt("Inserisci il " + i + "° numero"));
   if ( !isNaN(numero) ){
     somma += numero;
     i++;
   }
}
console.log(somma);

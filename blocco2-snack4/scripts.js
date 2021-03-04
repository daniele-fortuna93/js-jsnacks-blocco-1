// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

// 1. Creazione array
var numeri = [];
var num;
var continua;
var somma = 0;
var i = 0;

// // 2. Riempimento array
while ( continua != "no" ) {
   num = parseInt(prompt("Inserisci un numero"));
   if ( !isNaN(num) ){
     numeri.push(num);
     somma += numeri[i];
     i++;
     continua = prompt("Vuoi continuare?");
   }
}
console.log(numeri);
console.log(somma);

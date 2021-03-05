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
     i++;
     continua = prompt("Vuoi continuare?");
   }
}

// 3. Sommo i numeri in posizione dispari nell'array
for (var j = 0; j < numeri.length; j++) {
  if ( j % 2 == 0 ) {
      somma += parseInt(numeri[j]);
  }
}

// 4. Stampo array e somma
console.log(numeri);
console.log(somma);

// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// 1. Lista di nomi e cognomi

var nomi = ["Daniele", "Mario", "Antonio", "Samuele", "Filippo"];
var cognomi = ["Rossi", "Biondi", "Bianchi", "Neri", "Verdi"];

// // 2. Generatore falsa Lista e controllo doppioni
var falsaLista = [];
var nomeCognome;
for ( var i = 0; i < 3; i++ ) {
  do {
  nomeCognome = (nomi[Math.floor(Math.random() * nomi.length)]) + " " + (cognomi[Math.floor(Math.random() * cognomi.length)]);
} while ( falsaLista.includes(nomeCognome) )
falsaLista.push(nomeCognome);
}

// 3. Stampo falsaLista
console.log(falsaLista);

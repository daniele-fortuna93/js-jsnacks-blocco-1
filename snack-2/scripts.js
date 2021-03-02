// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga

// 1.Inserisci la prima parola
var parola1 = prompt("Inserisci la prima parola.");

// 2. Inserisci la seconda parola
var parola2 = prompt("Inserisci la seconda parola.");

// 3.Controllo lunghezza parole
if ( parola1.length > parola2.length ) {
  console.log(parola2);
  console.log(parola1);
} else if ( parola1.length < parola2.length ) {
  console.log(parola1);
  console.log(parola2);
} else {
  console.log(parola1 + " e " + parola2 + " hanno la stessa lunghezza.");
}
